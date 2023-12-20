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
