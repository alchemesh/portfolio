# Apache2
#
# docker run -itd \
#	-v /etc/localtime:/etc/localtime:ro \
#	-v /home/infamous/html:/var/www/html \
#	--link mysql:mysql \
#	--link tomcat9:tomcat9 \
#	-p 80:80 \
#       --net=shadow-net \
#	-h apache2.server \
#	--name apache2 \
#	apache2/docker
#

FROM debian:unstable

LABEL maintainer "Jorrell Smith <jorrells@linux.com>"

RUN apt-get update && apt-get install -y \
	apache2 \
 	php \
	libapache2-mod-php \
	php-mcrypt \
	php-mysql \
	php-curl \
	mysql-client \
	--no-install-recommends \
	&& rm -rf /var/lib/apt/lists/*



ENTRYPOINT service apache2 restart && bash 


