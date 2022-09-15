## Db lock system

For what is this needed if everything is local and I'm the only user?

Make locking system (let's call it `lock`), simply by creating a temporary empty `.lock.{filename}` file in the same folder and removing it after the operation. If it exists when doing an operation, just keep checking every 100ms or so and continue once it's gone.
