# Apache2
#
# docker run -itd \
#	-v /etc/localtime:/etc/localtime:ro \
#	-v /home/infamous/html:/var/www/html \
#	--link mysql:mysql \
#	-p 80:80 \
#	-h apache2.server \
#	--name apache2 \
#	apache2/docker
#

FROM debian:unstable

LABEL maintainer="Jorrell Smith <jorrells@linux.com>"

RUN apt-get update && apt-get install -y \
	apache2 \
 	php \
	libapache2-mod-php \
	php-mcrypt \
	php-mysql \
	php-curl \
	openssl \
	--no-install-recommends \
	&& rm -rf /var/lib/apt/lists/*


COPY /html /var/www/html
RUN rm /var/www/html/index.html
EXPOSE 80 443

CMD ["apache2ctl", "-D", "FOREGROUND"]
#ENTRYPOINT service apache2 restart && bash 


