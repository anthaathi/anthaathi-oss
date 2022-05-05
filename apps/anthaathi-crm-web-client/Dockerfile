# This should be S3 bucket ideally

FROM nginxinc/nginx-unprivileged
MAINTAINER Omkar <omkar@anthaathi.org>
COPY ./dist /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
