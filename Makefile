install:
	npm ci

run:
	bin/page-loader.js

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx oxlint && npx oxfmt --check

lint-fix:
	npx oxfmt && npx oxlint --fix