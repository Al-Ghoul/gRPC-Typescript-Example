import { Server, ServerCredentials } from '@grpc/grpc-js';
import { GreeterService, GreeterServer } from './generated/hello';

const server: Server = new Server();

// Implement the gRPC service
const greeterImplementation: GreeterServer = {
  sayHello: async (call, callback) => {
    callback(null, { message: `Hello ${call.request.name}` });
  },
};

// Manually add the service
server.addService(GreeterService, greeterImplementation);

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
  console.log('Server running on port 50051');
  server.start();
});

