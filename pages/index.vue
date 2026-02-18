<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Message from "primevue/message";
import Skeleton from "primevue/skeleton";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import TabPanel from "primevue/tabpanel";
import TabPanels from "primevue/tabpanels";
import Tabs from "primevue/tabs";
import Tag from "primevue/tag";

const sections = [
  {
    title: "Quick Start (4 Steps)",
    items: [
      "npm install",
      "npm run doctor",
      "npm run dev",
      "Start new projects with /start",
    ],
  },
  {
    title: "Golden Path",
    items: [
      "/start -> /prod -> /ux -> /copy -> /fe -> /qa -> /prod",
      "One tag in line 1 (if missing, suggest and choose)",
      "For new projects, always start with /start.",
    ],
  },
  {
    title: "First Prompt Templates",
    items: [
      "Coding: /start + project_track:coding + stack:vue",
      "Operations: /start + project_track:operations",
      "Use /help when unsure what to run next",
    ],
  },
  {
    title: "Definition of Done",
    items: [
      "Kickoff summary filled in .codex/skills/start/PROJECT_START_CHECKLIST.md",
      "Scope and AC updated in .codex/skills/product/PRD.md + .codex/skills/product/features/PROJ-*.md",
      "QA recommendation recorded using .codex/skills/qa/qa-report.md",
      "All gates pass: doctor, validate:docs, lint, build",
    ],
  },
  {
    title: "Useful Commands",
    items: [
      "npm run doctor",
      "npm run validate:docs",
      "npm run lint",
      "npm run typecheck",
      "npm run build",
      "npm run check",
    ],
  },
  {
    title: "Key Files",
    items: [
      "AGENTS.md",
      ".codex/skills/prompts.md",
      ".codex/skills/start/PROJECT_START_CHECKLIST.md",
      ".codex/rules/stacks/STACKS.md",
      ".codex/skills/playbooks/",
    ],
  },
];

const tabs = [
  { label: "Workflow", value: "workflow" },
  { label: "Core App Kit", value: "components" },
  { label: "Checks", value: "checks" },
];

const activeTab = ref("workflow");

function openExternal(url: string) {
  if (process.client) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
</script>

<template>
  <div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
    <div class="space-y-8">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <Tag value="PrimeVue Starter" />
          <Tag value="OSS Only" severity="contrast" />
        </div>

        <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
          Productized onboarding with explicit agent handoffs
        </h1>

        <p class="max-w-3xl text-base text-muted">
          Build with a consistent, file-based flow that starts with a mandatory kickoff gate and
          ends with an explicit release recommendation.
        </p>

        <div class="flex flex-wrap gap-3">
          <Button
            label="Run dev server"
            @click="openExternal('https://nuxt.com/docs/getting-started/installation')"
          />
          <Button
            label="Open prompts guide"
            severity="secondary"
            @click="openExternal('https://primevue.org')"
          />
        </div>
      </div>

      <Message severity="info">
        PrimeVue is the default component baseline. Use PrimeVue components for new features.
      </Message>

      <Card>
        <template #title>
          <div class="flex items-center justify-between gap-3">
            <p class="font-medium">Starter Contracts</p>
            <Skeleton width="5rem" height="0.75rem" />
          </div>
        </template>
        <template #content>
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab
                v-for="tab in tabs"
                :key="tab.value"
                :value="tab.value"
              >
                {{ tab.label }}
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="workflow" />
              <TabPanel value="components" />
              <TabPanel value="checks" />
            </TabPanels>
          </Tabs>
        </template>
      </Card>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="section in sections"
          :key="section.title"
        >
          <template #title>
            <h2 class="text-base font-semibold">
              {{ section.title }}
            </h2>
          </template>

          <template #content>
            <ul class="space-y-2 text-sm">
              <li
                v-for="item in section.items"
                :key="item"
              >
                <code>{{ item }}</code>
              </li>
            </ul>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
