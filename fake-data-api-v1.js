var express = require('express'),
	cors = require('cors'),
	app = express(),
	faker = require('faker');

app.set('port', process.env.PORT || 3500);

app.use(cors());

app.get('/api/fake/address', function(req, res) {
	res.json([
		{
			zipCode: faker.address.zipCode(),
			city: faker.address.city(),
			cityPrefix: faker.address.cityPrefix(),
			citySuffix: faker.address.citySuffix(),
			streetName: faker.address.streetName(),
			streetAddress: faker.address.streetAddress(),
			streetSuffix: faker.address.streetSuffix(),
			streetPrefix: faker.address.streetPrefix(),
			secondaryAddress: faker.address.secondaryAddress(),
			county: faker.address.county(),
			country: faker.address.country(),
			countryCode: faker.address.countryCode(),
			state: faker.address.state(),
			stateAbbr: faker.address.stateAbbr(),
			latitude: faker.address.latitude(),
			longitude: faker.address.longitude()
		}
	])
});

app.get('/api/fake/commerce', function(req, res) {
	res.json([
		{
			color: faker.commerce.color(),
			department: faker.commerce.department(),
			productName: faker.commerce.productName(),
			price: faker.commerce.price(),
			productAdjective: faker.commerce.productAdjective(),
			productMaterial: faker.commerce.productMaterial(),
			product: faker.commerce.product()
		}
	])
});

app.get('/api/fake/company', function(req, res) {
	res.json([
		{
			suffixes: faker.company.suffixes(),
			companyName: faker.company.companyName(),
			companySuffix: faker.company.companySuffix(),
			catchPhrase: faker.company.catchPhrase(),
			bs: faker.company.bs(),
			catchPhraseAdjective: faker.company.catchPhraseAdjective(),
			catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
			catchPhraseNoun: faker.company.catchPhraseNoun(),
			bsAdjective: faker.company.bsAdjective(),
			bsBuzz: faker.company.bsBuzz(),
			bsNoun: faker.company.bsNoun()
		}
	])
});

app.get('/api/fake/date', function(req, res) {
	res.json([
		{
			past: faker.date.past(),
			future: faker.date.future(),
			between: faker.date.between(),
			recent: faker.date.recent(),
			month: faker.date.month(),
			weekday: faker.date.weekday()
		}
	])
});

app.get('/api/fake/finance', function(req, res) {
	res.json([
		{
			account: faker.finance.account(),
			accountName: faker.finance.accountName(),
			mask: faker.finance.mask(),
			amount: faker.finance.amount(),
			transactionType: faker.finance.transactionType(),
			currencyCode: faker.finance.currencyCode(),
			currencyName: faker.finance.currencyName(),
			currencySymbol: faker.finance.currencySymbol(),
			bitcoinAddress: faker.finance.bitcoinAddress()
		}
	])
});

app.get('/api/fake/hacker', function(req, res) {
	res.json([
		{
			abbreviation: faker.hacker.abbreviation(),
			adjective: faker.hacker.adjective(),
			noun: faker.hacker.noun(),
			verb: faker.hacker.verb(),
			ingverb: faker.hacker.ingverb(),
			phrase: faker.hacker.phrase()
		}
	])
});

app.get('/api/fake/helpers', function(req, res) {
	res.json([
		{
			randomize: faker.helpers.randomize(),
			slugify: faker.helpers.slugify(),
			replaceSymbolWithNumber: faker.helpers.replaceSymbolWithNumber(),
			replaceSymbols: faker.helpers.replaceSymbols(),
			shuffle: faker.helpers.shuffle(),
			mustache: faker.helpers.mustache(),
			createCard: faker.helpers.createCard(),
			contextualCard: faker.helpers.contextualCard(),
			userCard: faker.helpers.userCard(),
			createTransaction: faker.helpers.createTransaction()
		}
	])
});

app.get('/api/fake/image', function(req, res) {
	res.json([
		{
			image: faker.image.image(),
			avatar: faker.image.avatar(),
			imageUrl: faker.image.imageUrl(),
			abstract: faker.image.abstract(),
			animals: faker.image.animals(),
			business: faker.image.business(),
			cats: faker.image.cats(),
			city: faker.image.city(),
			food: faker.image.food(),
			nightlife: faker.image.nightlife(),
			fashion: faker.image.fashion(),
			people: faker.image.people(),
			nature: faker.image.nature(),
			sports: faker.image.sports(),
			technics: faker.image.technics(),
			transport: faker.image.transport()
		}
	])
});

app.get('/api/fake/internet', function(req, res) {
	res.json([
		{
			avatar: faker.internet.avatar(),
			email: faker.internet.email(),
			exampleEmail: faker.internet.exampleEmail(),
			userName: faker.internet.userName(),
			protocol: faker.internet.protocol(),
			url: faker.internet.url(),
			domainName: faker.internet.domainName(),
			domainSuffix: faker.internet.domainSuffix(),
			domainWord: faker.internet.domainWord(),
			ip: faker.internet.ip(),
			userAgent: faker.internet.userAgent(),
			color: faker.internet.color(),
			mac: faker.internet.mac(),
			password: faker.internet.password()
		}
	])
});

app.get('/api/fake/lorem', function(req, res) {
	res.json([
		{
			word: faker.lorem.word(),
			words: faker.lorem.words(),
			sentence: faker.lorem.sentence(),
			sentences: faker.lorem.sentences(),
			paragraph: faker.lorem.paragraph(),
			paragraphs: faker.lorem.paragraphs(),
			text: faker.lorem.text(),
			lines: faker.lorem.lines()
		}
	])
});

app.get('/api/fake/name', function(req, res) {
	res.json([
		{
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			findName: faker.name.findName(),
			jobTitle: faker.name.jobTitle(),
			prefix: faker.name.prefix(),
			suffix: faker.name.suffix(),
			title: faker.name.title(),
			jobDescriptor: faker.name.jobDescriptor(),
			jobArea: faker.name.jobArea(),
			jobType: faker.name.jobType()
		}
	])
});

app.get('/api/fake/phone', function(req, res) {
	res.json([
		{
			phoneNumber: faker.phone.phoneNumber(),
			phoneNumberFormat: faker.phone.phoneNumberFormat(),
			phoneFormats: faker.phone.phoneFormats()
		}
	])
});

app.get('/api/fake/random', function(req, res) {
	res.json([
		{
			number: faker.random.number(),
			arrayElement: faker.random.arrayElement(),
			objectElement: faker.random.objectElement(),
			uuid: faker.random.uuid(),
			boolean: faker.random.boolean(),
			word: faker.random.word(),
			words: faker.random.words(),
			image: faker.random.image(),
			locale: faker.random.locale(),
			alphaNumeric: faker.random.alphaNumeric()
		}
	])
});

app.get('/api/fake/system', function(req, res) {
	res.json([
		{
			fileName: faker.system.fileName(),
			commonFileName: faker.system.commonFileName(),
			mimeType: faker.system.mimeType(),
			commonFileType: faker.system.commonFileType(),
			commonFileExt: faker.system.commonFileExt(),
			fileType: faker.system.fileType(),
			fileExt: faker.system.fileExt(),
			directoryPath: faker.system.directoryPath(),
			filePath: faker.system.filePath(),
			semver: faker.system.semver()
		}
	])
});

var server = app.listen(app.get('port'), function() {
	console.log('Server up: http://localhost:' + app.get('port'));
});
