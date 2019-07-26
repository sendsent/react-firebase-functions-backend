let db = {
	users: [
		{
			userId: "dsgfdsfdsfdsgdsher",
			email: "user@email.com",
			handle: "user",
			createdAt: "2019-07-11T02:31:28.833Z",
			imageUrl: "image/sdfgdsgdsgew/gdsgdsgds",
			bio: "Hello, my name is user, nice to meet you",
			website: "https://user.com",
			location: "Bay Area, USA"
		}
	],
	screams: [
		{
			userHandle: "user",
			body: "This is a sample scream",
			createdAt: "2019-07-11T02:31:28.833Z",
			likeCount: 5,
			commentCount: 2
		}
	],
	comments: [
		{
			userHandle: "user",
			screamId: "eqwiorheqwf89n390",
			body: "nice, one mate!",
			createdAt: "2019-07-17T02:31:28.833Z"
		}
	],
	notifications: [
		{
			recipient: "user",
			sender: "john",
			read: "true" | "false",
			screamId: "kdW3enj3jK2d1qqp",
			type: "like" | "comment",
			createdAt: "2019-07-17T03:31:28.833Z"
		}
	]
};
const userDetails = {
	// Redux data
	credentials: {
		userId: "N43JDF83F389HJK298W",
		email: "user@email.com",
		handle: "user",
		createdAt: "2019-07-11T02:31:28.833Z",
		imageUrl: "image/sdfgdsgdsgew/gdsgdsgds",
		bio: "Hello, my name is user, nice to meet you",
		website: "https://user.com",
		location: "Bay Area, USA"
	},
	likes: [
		{
			userHandle: "user",
			screamId: "hh489bd89jkFudY9ps"
		},
		{
			userHandle: "user",
			screamId: "4Ew0ooo1ddu83e3pcv"
		}
	]
};
