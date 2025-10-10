Во всем остальном ваша работа выполнена на отлично и вам плюсик за корректную работу с API.

ДЗ принято.

# 3-й тест. тест на удаление не проходит.
Если точнее эта ситуация происходит из-за кеширования, т.е. полученные данные потом используются как будто они не были изменены. К этой проблеме я не буду придираться  .

# 1-й тест. Не получается отправка изображения
Вам нужно залогиниться вначале. Вот как сделал это другой студент:

import expect from 'expect.js';
import ClientFactory from "../api/clientFactory.js";

const pet_id = Math.floor(Math.random() * 1000)
const client = await ClientFactory.loginAs({
    username: 'admin',
    password: 'admin'
})


describe('PetStore Homework', () => {
    it('Test_1', async () => {
        const additionalMetadata = 'testMetaData'
        const pathToFile = 'processor-64x64.png'

        const addedPet = await client.pet.postPet()
        const upload = await client.pet.uploadImage(addedPet.id, additionalMetadata, pathToFile)

        expect(upload.code).eql(200)
        expect(upload.message).contain(additionalMetadata)
        expect(upload.message).contain(pathToFile)
    })


### Файл clientFactory:

import PetController from "./controllers/pet.controller.js";
import UserController from "./controllers/user.controller.js";
import StoreController from "./controllers/store.controller.js";

export default class ClientFactory {
    constructor(params) {
        const defaultParams = {
            baseURL: 'https://petstore.swagger.io/v2',
            token: undefined
        }

        const mergedParams = {
            ...defaultParams,
            ...params
        }

        this.pet = new PetController(mergedParams)
        this.user = new UserController(mergedParams)
        this.store = new StoreController(mergedParams)
    }

    static async loginAs(creds) {
        return new ClientFactory({
            token: await new ClientFactory().user.login(creds)
        })
    }

}

Удачи в дальнейшей работе и обучении. Вы неплохо пишите тесты, мне было приятно проверять ваши работы.

# используют стримы
Вы не совсем правильно работаете со стримами, да и здесь можно сделать проще используя fs.readFile. Вот как сделал это другой студент, добавив логику с загрузкой файла в сам метод uploadImage:

async uploadImage(petId, imagePath, additionalMetadata, filename) {
        const form = new FormData();
        form.append('additionalMetadata', additionalMetadata);
        form.append('file', await fs.readFile(imagePath), { filename: filename });

        return (await new RequestBuilder()
            .url(this.params.baseUrl)
            .path(`/pet/${petId}/uploadImage`)
            .headers({ headers: form.getHeaders(),
                body: form
            })
            .get()).body
      }


И в самом тесте только вызов этого метода client.pet.uploadImage:

it.only("Test 1. Upload file", async () => {
    const client = new ClientFactory();
    const response = await client.pet.uploadImage(2, './__tests__/for_upload.jpeg', 'data', 'for_upload.jpeg');

    expect(response.message).toContain('for_upload.jpeg');
    expect(response.message).toContain('data');
  });

# Пример

Вот пример реализации первого теста:

it('upload pet image', async () => {
        const addedPet = await client.pet.addPet();
        const metaData = 'my_picture_is_cat';
        const fileName = 'cat.jpg';
        const filePath = path.join(path.dirname(fileName), fileName);

        const formData = new FormData();
        const fileData = fs.readFileSync(filePath);
        const stats = fs.statSync(filePath);
        const fileSizeInBytes = stats.size;
        const blob_object = new Blob([fileData]);

        formData.append('file', blob_object, fileName);
        formData.append('additionalMetadata', metaData);

        const imageResponse = await client.pet.uploadImage(
            addedPet.id,
            formData,
        );

        assert.equal(imageResponse.code, 200);
        assert.equal(
            imageResponse.message,
            `additionalMetadata: ${metaData}\nFile uploaded to ./${fileName}, ${fileSizeInBytes} bytes`,
        );
    });



А вот так можно реализовать сам плагин:

import got from 'got';
import fs from 'fs';

const logFileName = 'logs/log.txt';
const logStream = fs.createWriteStream(logFileName, {flags: 'a'});

const request = got.extend({
    hooks: {
        beforeRequest: [
            (options) => {
                logStream.write(`\x1b[35m REQUEST: \x1b[0m \n date: ${new Date().toUTCString()} \n request: ${JSON.stringify(options.body)} \n headers: ${JSON.stringify(options.headers)}\n method: ${JSON.stringify(options.method)}\n url: ${JSON.stringify(options.url)}\n\n`);
            },
        ],
        afterResponse: [
            (response) => {
                logStream.write(
                    `\x1b[31m RESPONSE: \x1b[0m \n date: ${new Date().toUTCString()} \n statusCode: ${response.statusCode} \n request: ${JSON.stringify(response.body)} \n headers: ${JSON.stringify(response.headers)}\n`,
                );
                return response;
            },
        ],
    },
    throwHttpErrors: false,

});

export default class RequestBuilder {
    constructor() {
        this.options = {
            responseType: 'json',
        };
    }

    url(url) {
        this.options.url = url;
        return this;
    }
    path(path) {
        this.options.url = `${this.options.url}${path}`;
        return this;
    }
    searchParams(params) {
        this.options.searchParams = params;
        return this;
    }
    headers(headers) {
        this.options.headers = headers;
        return this;
    }
    data(data) {
        this.options.json = data;
        return this;
    }
    body(body) {
        this.options.body = body;
        return this;
    }
    async get() {
        return request.get(this.options);
    }
    async post() {
        return request.post(this.options);
    }
    async put() {
        return request.put(this.options);
    }
    async delete() {
        return request.delete(this.options);
    }
}
