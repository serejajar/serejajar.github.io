###
Принять
Все выполнено по условиям ДЗ модуля и вам плюсик за то что разобрались с раннером. Работа выполнена на отлично!

ДЗ принято.

###
Похвалить
Вам плюсик за то что вы создали pipeline для запросов слияния, комитов и пр.!
---


###
Рекомендации
Вы можете так же ознакомится с ci/cd для github.com. Вполне возможно вам это пригодиться в дальнейшем.
https://resources.github.com/ci-cd/
https://habr.com/ru/company/skillfactory/blog/526078/


###
Прочее

Сейчас ваши runner-ы в статусе pending, но это решается если вы укажите в .gitlab-ci.yml блок указывающий когда он должен быть запущен. Вот он:

only:
     - pushes
     - merge_requests
     - master

-----     

Вот примерно как это должно выглядеть.

stages:
  - install
  - build
  - tests
  - deploy
  - UI tests
  - release
  - notify

install deps:
  stage: install
  only:
    - pushes
    - merge_requests
    - master
  except:
    - tags
  script:
    - echo "Install project deps"
    - mkdir node_modules
    - touch node_modules/package.json
  artifacts:
    paths:
      - node_modules/

build libs:
  stage: build
  only:
    - pushes
    - master
  except:
    - tags  
  script:
    - ls node_modules/
  dependencies:
    - install deps

build 3rd party:
  stage: build
  only:
    - pushes
  except:
    - tags
    - master
  script:
    - echo "This is buid 3rd party"
    - mkdir 3rd_party
    - touch 3rd_party/3rd_party.txt
  artifacts:
    paths:
      - 3rd_party/

unit:
  stage: tests
  only:
    - pushes
  except:
    - tags
    - master
  script:
    - ls node_modules/
    - ls 3rd_party/
  dependencies:
    - install deps
    - build 3rd party

lints:
  stage: tests
  only:
    - pushes
  except:
    - tags
    - master
  script:
    - ls node_modules/
    - ls 3rd_party/
  dependencies:
    - install deps
    - build 3rd party

Chrome:
  stage: UI tests
  only:
    - merge_requests
  except:
    - pushes
    - master
  script:
    - echo "Install and editing in Chrome"

FireFox:
  stage: UI tests
  only:
    - merge_requests
  except:
    - pushes
    - master
  script:
    - echo "Install and editing in Firefox"    

Edge:
  stage: UI tests
  only:
    - merge_requests
  except:
    - pushes
    - master
  script:
    - echo "Install and editing in Edge"    

deploy to stg:
  stage: deploy
  only:
    - merge_requests
  except:
    - pushes
    - master
  before_script:
    - ls node_modules/
  script:
    - rm -r node_modules/
  after_script:
    - ls node_modules/
  dependencies:
    - install deps

deploy to prod:
  stage: deploy
  only:
    - tags
  script:
    - echo “deploy to prod”

up version:
  stage: release
  only:
    - master
  script:
    - echo “job from master”

slack notify:
  stage: notify
  only:
    - master
  script:
    - echo “release was successfully released”

release notify:
  stage: notify
  only:
    - tags
  script:
    - echo “release was successfully deployed”
