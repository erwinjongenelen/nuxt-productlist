export default defineEventHandler((event) => {

	const { id, slug } = getQuery(event); // Extract id and slug from the query parameters

	const products = [
		{
		id: 124,
		title: "iPhone X",
		slug: "iphone-x",
		description:
			"The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
		category: "Smartphones",
		price: 899.99,
		discountPercentage: 0,
		tags: ["smartphones", "apple"],
		sku: "9QN3UDUD",
		reviews: [
			{
			rating: 1,
			comment: "Very unhappy with my purchase!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Eleanor Tyler",
			reviewerEmail: "eleanor.tyler@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Maya Reed",
			reviewerEmail: "maya.reed@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Elena Baker",
			reviewerEmail: "elena.baker@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
			"https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png",
			"https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
		},
		{
		id: 129,
		title: "Realme X",
		slug: "realme-x",
		description:
			"The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
		category: "Smartphones",
		price: 299.99,
		discountPercentage: 10,
		tags: ["smartphones", "realme"],
		sku: "5E11C5C4",
		reviews: [
			{
			rating: 4,
			comment: "Highly recommended!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Benjamin Foster",
			reviewerEmail: "benjamin.foster@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Madison Collins",
			reviewerEmail: "madison.collins@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Emily Johnson",
			reviewerEmail: "emily.johnson@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png",
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png",
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png",
		},
		{
		id: 130,
		title: "Realme XT",
		slug: "realme-xt",
		description:
			"The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
		category: "Smartphones",
		price: 349.99,
		discountPercentage: 15,
		tags: ["smartphones", "realme"],
		sku: "GHDMRAP2",
		reviews: [
			{
			rating: 5,
			comment: "Awesome product!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Hannah Howard",
			reviewerEmail: "hannah.howard@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Claire Foster",
			reviewerEmail: "claire.foster@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Very dissatisfied!",
			date: "2024-05-23T08:56:21.625Z",
			reviewerName: "Nora Russell",
			reviewerEmail: "nora.russell@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png",
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png",
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png",
		},
		{
		id: 100,
		title: "Apple Airpods",
		slug: "apple-airpods",
		description:
			"The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
		category: "Mobile accessories",
		price: 129.99,
		discountPercentage: 0,
		tags: ["electronics", "wireless earphones"],
		sku: "H76W8TSP",
		reviews: [
			{
			rating: 3,
			comment: "Waste of money!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Aaliyah Hanson",
			reviewerEmail: "aaliyah.hanson@x.dummyjson.com",
			},
			{
			rating: 2,
			comment: "Waste of money!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Leah Gutierrez",
			reviewerEmail: "leah.gutierrez@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Not worth the price!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Jace Smith",
			reviewerEmail: "jace.smith@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
		},
		{
		id: 101,
		title: "Apple AirPods Max Silver",
		slug: "apple-airpods-max-silver",
		description:
			"The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
		category: "Mobile accessories",
		price: 549.99,
		discountPercentage: 0,
		tags: ["electronics", "over-ear headphones"],
		sku: "HPK82VDE",
		reviews: [
			{
			rating: 1,
			comment: "Waste of money!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Harper Kelly",
			reviewerEmail: "harper.kelly@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Not as described!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Abigail Rivera",
			reviewerEmail: "abigail.rivera@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Excellent quality!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Nora Russell",
			reviewerEmail: "nora.russell@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
		},
		{
		id: 102,
		title: "Apple Airpower Wireless Charger",
		slug: "apple-airpower-wireless-charger",
		description:
			"The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
		category: "Mobile accessories",
		price: 79.99,
		discountPercentage: 0,
		tags: ["electronics", "wireless chargers"],
		sku: "CBIU3PMZ",
		reviews: [
			{
			rating: 5,
			comment: "Awesome product!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Bella Gonzalez",
			reviewerEmail: "bella.gonzalez@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Eli Bennett",
			reviewerEmail: "eli.bennett@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Cameron Perez",
			reviewerEmail: "cameron.perez@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png",
		},
		{
		id: 103,
		title: "Apple HomePod Mini Cosmic Grey",
		slug: "apple-homepod-mini-cosmic-grey",
		description:
			"The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
		category: "Mobile accessories",
		price: 99.99,
		discountPercentage: 10,
		tags: ["electronics", "smart speakers"],
		sku: "LDHQAT4B",
		reviews: [
			{
			rating: 3,
			comment: "Very dissatisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Evelyn Gonzalez",
			reviewerEmail: "evelyn.gonzalez@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Very unhappy with my purchase!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Mateo Perez",
			reviewerEmail: "mateo.perez@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Nora Mills",
			reviewerEmail: "nora.mills@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png",
		},
		{
		id: 104,
		title: "Apple iPhone Charger",
		slug: "apple-iphone-charger",
		description:
			"The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
		category: "Mobile accessories",
		price: 19.99,
		discountPercentage: 0,
		tags: ["electronics", "chargers"],
		sku: "YAA6EHI7",
		reviews: [
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Emily Johnson",
			reviewerEmail: "emily.johnson@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Charlotte Lopez",
			reviewerEmail: "charlotte.lopez@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Highly recommended!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Cameron Perez",
			reviewerEmail: "cameron.perez@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png",
		},
		{
		id: 105,
		title: "Apple MagSafe Battery Pack",
		slug: "apple-magsafe-battery-pack",
		description:
			"The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
		category: "Mobile accessories",
		price: 99.99,
		discountPercentage: 15,
		tags: ["electronics", "power banks"],
		sku: "XNFJURL7",
		reviews: [
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Hazel Gardner",
			reviewerEmail: "hazel.gardner@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Aurora Rodriguez",
			reviewerEmail: "aurora.rodriguez@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Victoria McDonald",
			reviewerEmail: "victoria.mcdonald@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png",
		},
		{
		id: 106,
		title: "Apple Watch Series 4 Gold",
		slug: "apple-watch-series-4-gold",
		description:
			"The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
		category: "Mobile accessories",
		price: 349.99,
		discountPercentage: 20,
		tags: ["electronics", "smartwatches"],
		sku: "ZNXPOEPT",
		reviews: [
			{
			rating: 3,
			comment: "Would not buy again!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Ellie Stewart",
			reviewerEmail: "ellie.stewart@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Poor quality!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Grayson Coleman",
			reviewerEmail: "grayson.coleman@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Alice Smith",
			reviewerEmail: "alice.smith@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
		},
		{
		id: 107,
		title: "Beats Flex Wireless Earphones",
		slug: "beats-flex-wireless-earphones",
		description:
			"The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
		category: "Mobile accessories",
		price: 49.99,
		discountPercentage: 10,
		tags: ["electronics", "wireless earphones"],
		sku: "7N15J2UK",
		reviews: [
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Hannah Robinson",
			reviewerEmail: "hannah.robinson@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Awesome product!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Grace Perry",
			reviewerEmail: "grace.perry@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Grayson Coleman",
			reviewerEmail: "grayson.coleman@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png",
		},
		{
		id: 108,
		title: "iPhone 12 Silicone Case with MagSafe Plum",
		slug: "iphone-12-silicone-case-with-magsafe-plum",
		description:
			"The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
		category: "Mobile accessories",
		price: 29.99,
		discountPercentage: 0,
		tags: ["electronics", "phone accessories"],
		sku: "3UHE8VLA",
		reviews: [
			{
			rating: 1,
			comment: "Very disappointed!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Isaac Lawrence",
			reviewerEmail: "isaac.lawrence@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Emily Johnson",
			reviewerEmail: "emily.johnson@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly recommended!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Mateo Bennett",
			reviewerEmail: "mateo.bennett@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png",
		},
		{
		id: 109,
		title: "Monopod",
		slug: "monopod",
		description:
			"The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
		category: "Mobile accessories",
		price: 19.99,
		discountPercentage: 0,
		tags: ["electronics", "camera accessories"],
		sku: "RDEQ0W2L",
		reviews: [
			{
			rating: 4,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Austin Hudson",
			reviewerEmail: "austin.hudson@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Excellent quality!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Austin Hudson",
			reviewerEmail: "austin.hudson@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Gabriel Mitchell",
			reviewerEmail: "gabriel.mitchell@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/1.png",
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/2.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/thumbnail.png",
		},
		{
		id: 110,
		title: "Selfie Lamp with iPhone",
		slug: "selfie-lampp-with-iphone",
		description:
			"The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
		category: "Mobile accessories",
		price: 14.99,
		discountPercentage: 0,
		tags: ["electronics", "selfie accessories"],
		sku: "2VZ1ZNMO",
		reviews: [
			{
			rating: 5,
			comment: "Very happy with my purchase!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Hannah Howard",
			reviewerEmail: "hannah.howard@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Excellent quality!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "William Gonzalez",
			reviewerEmail: "william.gonzalez@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Would not buy again!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Amelia Perez",
			reviewerEmail: "amelia.perez@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
		},
		{
		id: 111,
		title: "Selfie Stick Monopod",
		slug: "selfie-stick-monopad",
		description:
			"The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
		category: "Mobile accessories",
		price: 12.99,
		discountPercentage: 0,
		tags: ["electronics", "selfie accessories"],
		sku: "9T6WSF1E",
		reviews: [
			{
			rating: 5,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Aaron Cook",
			reviewerEmail: "aaron.cook@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very happy with my purchase!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Emma Wilson",
			reviewerEmail: "emma.wilson@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Mia Miller",
			reviewerEmail: "mia.miller@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png",
		},
		{
		id: 112,
		title: "TV Studio Camera Pedestal",
		slug: "tv-studio-camera-pedestral",
		description:
			"The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
		category: "Mobile accessories",
		price: 499.99,
		discountPercentage: 0,
		tags: ["electronics", "camera accessories"],
		sku: "8K18CNAH",
		reviews: [
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Mia Miller",
			reviewerEmail: "mia.miller@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Harper Kelly",
			reviewerEmail: "harper.kelly@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Would not buy again!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Lucas Allen",
			reviewerEmail: "lucas.allen@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/1.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png",
		},
		{
		id: 159,
		title: "iPad Mini 2021 Starlight",
		slug: "ipad-mini-2021-starlight",
		description:
			"The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
		category: "Tablets",
		price: 499.99,
		discountPercentage: 0,
		tags: ["electronics", "tablets"],
		sku: "L5CSWLNS",
		reviews: [
			{
			rating: 2,
			comment: "Disappointing product!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Hazel Evans",
			reviewerEmail: "hazel.evans@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Sophia Jones",
			reviewerEmail: "sophia.jones@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Abigail Rivera",
			reviewerEmail: "abigail.rivera@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png",
			"https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png",
			"https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/3.png",
			"https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/4.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png",
		},
		{
		id: 160,
		title: "Samsung Galaxy Tab S8 Plus Grey",
		slug: "samsung-galaxy-tab-s8-plus-grey",
		description:
			"The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
		category: "Tablets",
		price: 599.99,
		discountPercentage: 10,
		tags: ["electronics", "tablets"],
		sku: "1SIVLPFN",
		reviews: [
			{
			rating: 2,
			comment: "Would not buy again!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Jackson Morales",
			reviewerEmail: "jackson.morales@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Cameron Perez",
			reviewerEmail: "cameron.perez@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Nova Cooper",
			reviewerEmail: "nova.cooper@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png",
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png",
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/3.png",
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/4.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
		},
		{
		id: 161,
		title: "Samsung Galaxy Tab White",
		slug: "samsung-galaxy-tab-white",
		description:
			"The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
		category: "Tablets",
		price: 349.99,
		discountPercentage: 0,
		tags: ["electronics", "tablets"],
		sku: "AKJPAPFO",
		reviews: [
			{
			rating: 2,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Lucas Ramirez",
			reviewerEmail: "lucas.ramirez@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Chloe Roberts",
			reviewerEmail: "chloe.roberts@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Not as described!",
			date: "2024-05-23T08:56:21.626Z",
			reviewerName: "Benjamin Foster",
			reviewerEmail: "benjamin.foster@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png",
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/2.png",
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/3.png",
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/4.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/thumbnail.png",
		},
		{
		id: 78,
		title: "Apple MacBook Pro 14 Inch Space Grey",
		slug: "apple-macbook-pro-14-inch-space-grey",
		description:
			"The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
		category: "Laptops",
		price: 1999.99,
		discountPercentage: 0,
		tags: ["laptops", "apple"],
		sku: "QDKO6NRJ",
		reviews: [
			{
			rating: 5,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Hunter Gordon",
			reviewerEmail: "hunter.gordon@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Emma Wilson",
			reviewerEmail: "emma.wilson@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "David Martinez",
			reviewerEmail: "david.martinez@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
			"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
			"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
		},
		{
		id: 79,
		title: "Asus Zenbook Pro Dual Screen Laptop",
		slug: "asus-zenbook-pro-dual-screen-laptop",
		description:
			"The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
		category: "Laptops",
		price: 1799.99,
		discountPercentage: 0,
		tags: ["laptops"],
		sku: "4A9KFMBG",
		reviews: [
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Jack Ward",
			reviewerEmail: "jack.ward@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Very disappointed!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Ava Harris",
			reviewerEmail: "ava.harris@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Great value for money!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Brayden Fleming",
			reviewerEmail: "brayden.fleming@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
			"https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
			"https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
		},
		{
		id: 80,
		title: "Huawei Matebook X Pro",
		slug: "huawei-matebook-x-pro",
		description:
			"The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
		category: "Laptops",
		price: 1399.99,
		discountPercentage: 15,
		tags: ["laptops"],
		sku: "U2CBNNB0",
		reviews: [
			{
			rating: 4,
			comment: "Great value for money!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Samantha Howard",
			reviewerEmail: "samantha.howard@x.dummyjson.com",
			},
			{
			rating: 2,
			comment: "Would not buy again!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Daniel Cook",
			reviewerEmail: "daniel.cook@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.622Z",
			reviewerName: "Brayden Fleming",
			reviewerEmail: "brayden.fleming@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
			"https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
			"https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
		},
		{
		id: 81,
		title: "Lenovo Yoga 920",
		slug: "lenova-yoga-920",
		description:
			"The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
		category: "Laptops",
		price: 1099.99,
		discountPercentage: 0,
		tags: ["laptops"],
		sku: "MST9WZQY",
		reviews: [
			{
			rating: 4,
			comment: "Very happy with my purchase!",
			date: "2024-05-23T08:56:21.623Z",
			reviewerName: "Paisley Bell",
			reviewerEmail: "paisley.bell@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.623Z",
			reviewerName: "Lincoln Kelly",
			reviewerEmail: "lincoln.kelly@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.623Z",
			reviewerName: "Luna Russell",
			reviewerEmail: "luna.russell@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
			"https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
			"https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
		},
		{
		id: 82,
		title: "New DELL XPS 13 9300 Laptop",
		slug: "new-dell-xps-13-9300-laptop",
		description:
			"The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
		category: "Laptops",
		price: 1499.99,
		discountPercentage: 10,
		tags: ["laptops"],
		sku: "XBJJ446X",
		reviews: [
			{
			rating: 3,
			comment: "Very disappointed!",
			date: "2024-05-23T08:56:21.623Z",
			reviewerName: "Julian Newton",
			reviewerEmail: "julian.newton@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.623Z",
			reviewerName: "Grace Perry",
			reviewerEmail: "grace.perry@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.623Z",
			reviewerName: "Daniel Taylor",
			reviewerEmail: "daniel.taylor@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
			"https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
			"https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
		},
		{
		id: 93,
		title: "Brown Leather Belt Watch",
		slug: "brown-leather-belt-watch",
		description:
			"The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
		category: "mens-watches",
		price: 89.99,
		discountPercentage: 0,
		tags: ["watches", "leather watches"],
		sku: "WGZ21MSA",
		reviews: [
			{
			rating: 3,
			comment: "Very dissatisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Oscar Powers",
			reviewerEmail: "oscar.powers@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Eli Ward",
			reviewerEmail: "eli.ward@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Stella Hughes",
			reviewerEmail: "stella.hughes@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
		},
		{
		id: 94,
		title: "Longines Master Collection",
		slug: "longines-master-collection",
		description:
			"The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
		category: "mens-watches",
		price: 1499.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches"],
		sku: "LA7B9XEV",
		reviews: [
			{
			rating: 4,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Jack Ward",
			reviewerEmail: "jack.ward@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly recommended!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Victoria McDonald",
			reviewerEmail: "victoria.mcdonald@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Mia Rodriguez",
			reviewerEmail: "mia.rodriguez@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
		},
		{
		id: 95,
		title: "Rolex Cellini Date Black Dial",
		slug: "rolex-cellini-date-black-dial",
		description:
			"The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
		category: "mens-watches",
		price: 8999.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches"],
		sku: "J3GPKQW0",
		reviews: [
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Gavin Stanley",
			reviewerEmail: "gavin.stanley@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Stella Hughes",
			reviewerEmail: "stella.hughes@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Paisley Bell",
			reviewerEmail: "paisley.bell@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
		},
		{
		id: 96,
		title: "Rolex Cellini Moonphase",
		slug: "rolex-cellini-moonphase-men",
		description:
			"The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
		category: "mens-watches",
		price: 12999.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches"],
		sku: "LUZDIKKR",
		reviews: [
			{
			rating: 4,
			comment: "Very happy with my purchase!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Sophia Jones",
			reviewerEmail: "sophia.jones@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Jacob Cooper",
			reviewerEmail: "jacob.cooper@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Very satisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Elijah Cruz",
			reviewerEmail: "elijah.cruz@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
		},
		{
		id: 97,
		title: "Rolex Datejust",
		slug: "rolex-datejust",
		description:
			"The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
		category: "mens-watches",
		price: 10999.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches"],
		sku: "86V20NWJ",
		reviews: [
			{
			rating: 5,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Max Russell",
			reviewerEmail: "max.russell@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Jonathan Pierce",
			reviewerEmail: "jonathan.pierce@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Awesome product!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Asher Scott",
			reviewerEmail: "asher.scott@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
		},
		{
		id: 98,
		title: "Rolex Submariner Watch",
		slug: "rolex-submariner-watch",
		description:
			"The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
		category: "mens-watches",
		price: 13999.99,
		discountPercentage: 10,
		tags: ["watches", "luxury watches"],
		sku: "XFGRO0O5",
		reviews: [
			{
			rating: 2,
			comment: "Very dissatisfied!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Emily Brown",
			reviewerEmail: "emily.brown@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Nova Cooper",
			reviewerEmail: "nova.cooper@x.dummyjson.com",
			},
			{
			rating: 2,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.624Z",
			reviewerName: "Julian James",
			reviewerEmail: "julian.james@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png",
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
		},
		{
		id: 190,
		title: "IWC Ingenieur Automatic Steel",
		slug: "iwc-ingenieur-automatic-steel",
		description:
			"The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
		category: "womens-watches",
		price: 4999.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches"],
		sku: "OJF7AK1J",
		reviews: [
			{
			rating: 5,
			comment: "Great value for money!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Nova Cooper",
			reviewerEmail: "nova.cooper@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Very unhappy with my purchase!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Nicholas Bailey",
			reviewerEmail: "nicholas.bailey@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Paisley Bell",
			reviewerEmail: "paisley.bell@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/1.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/2.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png",
		},
		{
		id: 191,
		title: "Rolex Cellini Moonphase",
		slug: "rolex-cellini-moonphase-women",
		description:
			"The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
		category: "womens-watches",
		price: 15999.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches"],
		sku: "E8CYFYQL",
		reviews: [
			{
			rating: 5,
			comment: "Great value for money!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Logan Lee",
			reviewerEmail: "logan.lee@x.dummyjson.com",
			},
			{
			rating: 1,
			comment: "Would not recommend!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Leah Henderson",
			reviewerEmail: "leah.henderson@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Very pleased!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Mateo Nguyen",
			reviewerEmail: "mateo.nguyen@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/2.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
		},
		{
		id: 192,
		title: "Rolex Datejust Women",
		slug: "rolex-datejust-women",
		description:
			"The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
		category: "womens-watches",
		price: 10999.99,
		discountPercentage: 0,
		tags: ["watches", "luxury watches", "women's watches"],
		sku: "VKQ2UNB9",
		reviews: [
			{
			rating: 2,
			comment: "Very disappointed!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Evan Reed",
			reviewerEmail: "evan.reed@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Excellent quality!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Isabella Jackson",
			reviewerEmail: "isabella.jackson@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Highly recommended!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Liam Garcia",
			reviewerEmail: "liam.garcia@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/2.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/thumbnail.png",
		},
		{
		id: 193,
		title: "Watch Gold for Women",
		slug: "watch-gold-for-women",
		description:
			"The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
		category: "womens-watches",
		price: 799.99,
		discountPercentage: 0,
		tags: ["watches", "women's watches"],
		sku: "N6I9YEWM",
		reviews: [
			{
			rating: 1,
			comment: "Not as described!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Lucas Allen",
			reviewerEmail: "lucas.allen@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Highly impressed!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Bella Gonzalez",
			reviewerEmail: "bella.gonzalez@x.dummyjson.com",
			},
			{
			rating: 4,
			comment: "Would buy again!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Michael Johnson",
			reviewerEmail: "michael.johnson@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/1.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/2.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png",
		},
		{
		id: 194,
		title: "Women's Wrist Watch",
		slug: "womens-wrist-watch",
		description:
			"The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
		category: "womens-watches",
		price: 129.99,
		discountPercentage: 0,
		tags: ["watches", "women's watches"],
		sku: "36T6X4M3",
		reviews: [
			{
			rating: 4,
			comment: "Fast shipping!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Emily Brown",
			reviewerEmail: "emily.brown@x.dummyjson.com",
			},
			{
			rating: 5,
			comment: "Great product!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Liam Smith",
			reviewerEmail: "liam.smith@x.dummyjson.com",
			},
			{
			rating: 3,
			comment: "Waste of money!",
			date: "2024-05-23T08:56:21.628Z",
			reviewerName: "Mila Hernandez",
			reviewerEmail: "mila.hernandez@x.dummyjson.com",
			},
		],
		images: [
			"https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/1.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/2.png",
			"https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/3.png",
		],
		thumbnail:
			"https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/thumbnail.png",
		},
	]

	// If ID is provided, return product by id
	if (id) {
		return products.find(product => product.id == id) || { error: 'Product not found' }
	}

	// If slug is provided, return product by slug.
	if (slug) {
		return products.find(product => product.slug === slug) || { error: 'Product not found' }
	}

	// Return list of products
	return { products }

});
