import React from "react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination.jsx";
import { HStack } from "@chakra-ui/react";

function MyApp29(props) {
  return (
    <div>
      <PaginationRoot
        count={1024}
        pageSize={5}
        defaultPage={1}
        siblingCount={3}
        variant={"solid"}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
      <h5> pagination</h5>
      <PaginationRoot count={1024} pageSize={5} defaultPage={1}>
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </div>
  );
}

export default MyApp29;
