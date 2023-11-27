FROM denoland/deno:1.38.2

WORKDIR /app

# Don't run as root. The denoland.deno package comes with a built in user 'deno'
USER deno

# Copy the code over to the docker image
ADD src .

# Execute the server
ENTRYPOINT ["/tini", "--", "/bin/bash", "/app/docker-entrypoint.sh"]
