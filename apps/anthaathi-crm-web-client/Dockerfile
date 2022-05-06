# This should be S3 bucket ideally

FROM nginxinc/nginx-unprivileged
MAINTAINER Omkar <omkar@anthaathi.org>
COPY ./dist /usr/share/nginx/html/
COPY ../nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
