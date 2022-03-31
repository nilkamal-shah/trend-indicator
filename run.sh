npm run build
docker ps
docker rm -f $(docker ps -a -q)
docker build -t transaction-insight .
docker run -it --rm -d -p 80:80 --name web transaction-insight