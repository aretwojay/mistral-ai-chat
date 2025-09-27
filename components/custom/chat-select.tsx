"use client";
import { Select, SelectItem } from "@heroui/select";
import { useEffect, useState } from "react";

export default function ChatSelect({
  onChange,
}: {
  onChange?: (model: string) => void;
}) {
  const [models, setModels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch("/api/mistral/models");
        if (response.ok) {
          const data = await response.json();
          setModels(data.models || []);
          if (data.models.length > 0) {
            setSelectedModel(data.models[0].id);
            onChange?.(data.models[0].id);
          }
        }
      } catch (error) {
        console.error("Failed to fetch models:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  return (
    <Select
      label="Select Model"
      placeholder="Choose a model"
      selectedKeys={selectedModel ? [selectedModel] : []}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0] as string;
        console.log(selected);
        setSelectedModel(selected);
        onChange?.(selected);
      }}
      isLoading={loading}
      className="max-w-xs"
    >
      {models.map((model, i) => (
        <SelectItem key={model + i}>{model}</SelectItem>
      ))}
    </Select>
  );
}
