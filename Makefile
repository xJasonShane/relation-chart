.PHONY: up

up:
    npm run build
	git add .
	git commit -am "update"
	git pull origin master
	git push origin master
	@echo "\n update..."


