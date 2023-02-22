FROM nginx

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 build 폴더 생성 /app/build
RUN mkdir ./build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./build ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]

# # 가져올 이미지를 정의
# FROM node:16
# # 경로 설정하기
# WORKDIR /app
# # package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
# COPY package.json .
# # 명령어 실행 (의존성 설치)
# RUN npm install
# # 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
# COPY . .

# # 각각의 명령어들은 한줄 한줄씩 캐싱되어 실행된다.
# # package.json의 내용은 자주 바뀌진 않을 거지만
# # 소스 코드는 자주 바뀌는데
# # npm install과 COPY . . 를 동시에 수행하면
# # 소스 코드가 조금 달라질때도 항상 npm install을 수행해서 리소스가 낭비된다.

# # 3000번 포트 노출
# EXPOSE 3031:3307

# # npm start 스크립트 실행
# CMD ["npm","run", "start:docker"]

# # 그리고 Dockerfile로 docker 이미지를 빌드해야한다.
# # $ docker build .