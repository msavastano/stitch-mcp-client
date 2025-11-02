import { useState } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { addServer } from "../api/mock";
import type { Server } from "../types";

const AddServerPage = ({ onClose }: { onClose: () => void }) => {
  const [config, setConfig] = useState("");

  const handleSave = () => {
    try {
      const newServerConfig = JSON.parse(config);
      // Basic validation
      if (newServerConfig.name && newServerConfig.address) {
        addServer(newServerConfig as Omit<Server, "id" | "tools">).then(() => {
          onClose();
        });
      } else {
        alert("Invalid configuration: Missing name or address.");
      }
    } catch (error) {
      alert("Invalid JSON format.");
    }
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-2xl flex-col overflow-x-hidden">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-background-light/80 px-4 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex size-10 shrink-0 items-center justify-start text-zinc-900 dark:text-white">
          <button onClick={onClose}>
            <Icon name="close" className="text-2xl" />
          </button>
        </div>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
          Add Server Configuration
        </h1>
        <div className="flex w-10 shrink-0 items-center justify-end"></div>
      </header>
      <main className="flex-1 pb-40">
        <div className="p-4">
          <section>
            <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
              Server Configuration
            </h2>
            <div className="flex flex-col gap-4 rounded-xl bg-white p-4 dark:bg-zinc-900/50">
              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium leading-normal text-zinc-700 dark:text-zinc-300">
                  Configuration (JSON)
                </p>
                <textarea
                  className="form-textarea w-full resize-y rounded-lg border-zinc-300 bg-background-light p-4 font-mono text-sm leading-normal text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:border-zinc-700 dark:bg-background-dark dark:text-white dark:placeholder:text-zinc-500"
                  placeholder='{\n  "name": "Production Web Server",\n  "address": "192.168.1.100",\n  "port": 8080,\n  "credentials": {\n    "username": "admin"\n  }\n}'
                  rows={15}
                  value={config}
                  onChange={(e) => setConfig(e.target.value)}
                ></textarea>
              </label>
              <p className="px-1 text-sm text-zinc-600 dark:text-zinc-400">
                Enter the server configuration details in JSON format. Ensure
                the structure is correct before saving.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 z-10 w-full max-w-2xl border-t border-white/10 bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1">
            Save Configuration
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default AddServerPage;
