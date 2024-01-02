# Makefile for building hello.c to WebAssembly

# Source file
SOURCE = hello.c

# Output file
OUTPUT = hello.html

build:
	emcc $(SOURCE) -s WASM=1 -o $(OUTPUT)

hello:
	echo "Hello, World"

.PHONY: build
