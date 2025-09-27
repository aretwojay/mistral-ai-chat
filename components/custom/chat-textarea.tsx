"use client";
import { mistralClient } from "@/lib/mistral";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { useState } from "react";
import { SearchIcon } from "../icons";

export const ChatTextarea = ({ model }: { model: string }) => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const send = async () => {
    if (!model) return;
    setIsLoading(true);
    const response = await mistralClient.chat.complete({
      model: model,
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
    });
    setIsLoading(false);
    console.log(response);
  };

  console.log("Selected model:", model);

  return (
    <div className="flex flex-col gap-2 w-full">
      <Textarea
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        onInput={(e) => setInput(e.currentTarget.value)}
        type="search"
      />
      <Button disabled={isLoading} onPress={() => send()}>
        {isLoading ? "Loading..." : "Send"}
      </Button>
    </div>
  );
};
