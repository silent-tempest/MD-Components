SOURCES := index.sass reset.sass clear.sass grid.sass buttons/raised-button.sass
MAIN    := index.sass

all: $(SOURCES)

%.sass:
	node-sass -o styles sass/$@

%.scss:
	node-sass -o styles sass/$@
