#!/bin/bash
docker stop $(docker ps -a -q --filter="name=eicas_tst")
docker rm $(docker ps -a -q --filter="name=eicas_tst")

