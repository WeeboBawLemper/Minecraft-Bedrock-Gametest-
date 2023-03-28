import {
    MinecraftEnchantmentTypes,
    InventoryComponentContainer,
    EnchantmentList,
    Entity,
    world,
    MinecraftBlockTypes,
    Player,
    system,
    DynamicPropertiesDefinition,
    MolangVariableMap
  } from "@minecraft/server";
  import {
    ActionFormData,
    MessageFormData,
    ModalFormData
  } from "@minecraft/server-ui";
  system.events.beforeWatchdogTerminate.subscribe(data => {
    data.cancel = true;
  });