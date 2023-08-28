// ====================================================
//  pluginLoadInit.js
// ====================================================
export default async (context) => {
  await context.store.dispatch('common/storeLoadInit/initSettingApp', context)
  await context.store.dispatch('common/storeLoadInit/initMenuApp', context)
  await context.store.dispatch('common/storeLoadAds/initLoadAds')
}