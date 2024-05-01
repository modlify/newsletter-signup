# Newsletter Signup with Modlify Webhooks

This is an example repository of how to use Modlify webhooks within a Remix application to create a newsletter signup form for your website.

[Read the full tutorial on our blog](https://www.modlify.io/news/blog/build-a-mailing-list-with-modlify-and-remix)

## How do I use this?

### Clone this repository
```sh
git clone https://github.com/modlify/newsletter-signup.git
```
### Install dependencies
```sh
npm install
```

### Set environment variables
Create a `.env` file at the root of the repository, containing the webhook URL you generated in [Modlify](https://app.modlify.io)
```
WEBHOOK_URL=https://webhooks.modlify.io/...
```

### Start the app
```sh
npm run dev
```
