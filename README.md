# Qureight Coding Challenge

The machine learning team have made the world’s most powerful cat classifier, but it’s
not quite ready yet. They tell you it takes around _60 seconds_ to confirm if a JPEG
image sent to a server is a cat.

You have been tasked with making a simple frontend web application that allows a user to
upload a single image to an `/isthisacat` endpoint. The API is not ready yet, so you
will need to build a simple mock REST API for it.

A very high value client wants to see a demo of how this might work, and the Head of
Quality is expecting a robust and reliable system.

## Constraints

- App should make use of React
- Use a UI library of your choice
- Task should be completed in 2 hours or less
- Use this repository as a template for your app

## Solution

I'm used to working with "monorepo" type projects, which works nicely when you need to add any extra services, infra code or config and any project-wide stuff can go at the top level.

For the mock API:

- [x] Tiny Python server running FastAPI (I've never used FastAPI before, but I hear it's fast to write as well as to run 😉)
- [x] Respond with a random result after a 60sec timeout
- [x] Add a little extra data (it's a classifier so a percentage measure of confidence feels appropriate)

(Note to self: API dev command is `uvicorn main:app --reload`)

For the client:

- [x] Scaffold a React app with Vite (seemed to be faster than `create-react-app` last time I checked)
- [x] Add Bulma for styling (doesn't have the build overhead of Tailwind for little projects like this)
- [x] React component for the file input which has:
  - [x] A little validation so it accepts only JPEGs
  - [x] Props to control disabled and "loading" state
- [ ] React component to display the output from the API
  - A minimal "yes/no", appropriately styled
  - Supplementary info

(Note to self: usual `npm run dev` for hot reloads)

For putting it together:

- [ ] `Dockerfile`s in the API and client directories
- [ ] `docker-compose.yml` for running the whole thing with one command

## Outcome

Trying to cobble things together to time doesn't always go to plan - in my case, the assumption I made was that my little Mock API would "just work" but it wasn't happy with the requests from the client for a while... until I realised I left CORS out of the equation.

So I haven't made the client as pretty as I'd like and I'm still one UI component short. My original vision for server, client and Docker containers was probably a little too much.

### Lessons

Trying to do the entire "full stack" thing from scratch was probably a mistake. It might have been better to keep the API fakery entirely on the client side.

Road testing unfamiliar frameworks while on a deadline also not a good idea. But it was fun for a while, I don't regret it from that perspective.
