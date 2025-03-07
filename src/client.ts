import { GreeterClient } from "./generated/hello";
import { credentials } from "@grpc/grpc-js";

// Create a strongly typed gRPC client
const client = new GreeterClient(
  "localhost:50051",
  credentials.createInsecure(),
);

client.sayHello({ name: 'World' }, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', response.message);
  }
});

