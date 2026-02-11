FROM nginx:alpine

USER root

# Muda nginx para escutar 8080
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf

# Permite escrita nas pastas necessárias
RUN chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/run \
    && chown -R nginx:nginx /etc/nginx/conf.d

USER nginx

COPY . /usr/share/nginx/html

EXPOSE 8080
