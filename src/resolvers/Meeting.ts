// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MeetingResolvers } from "../generated/graphqlgen";

export const Meeting: MeetingResolvers.Type = {
  ...MeetingResolvers.defaultResolvers,

  group: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
