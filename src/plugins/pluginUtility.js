export default (context, inject) => {
  /**
   * omitText
   * @returns {String}
   */
  inject('omitText', (rowTitle, textLimit) => {
    const omitedTitle = rowTitle.substring(0, textLimit)

    if (rowTitle.length >= textLimit) {
      return omitedTitle + '...'
    } else {
      return rowTitle
    }
  })

  /**
   * formatDateCommon
   * @returns {String}
   */
  inject('formatDateCommon', (date, format = false) => {
    const dateObj = context.app.$dayjs(date)
    console.log(dateObj);
    if (format) {
      return dateObj.format(format)
    }
    return dateObj.format('DD/MM/YYYY')
  })

  /**
   * defaultImg
   */
  inject('defaultImg', () => {
    return `assets/img/default-thumbnail.png`
  })

  /**
   * create post
   * @returns {String} 
   */
  inject('timePost', (date) => {
    if (!date) return null
    const time = date.split(' ')
    return time[0]
  })

  /**
   * create post
   * @returns {String} 
   */
  inject('permalink', (item) => {
    const permalinkId = context.store.getters['common/storeLoadInit/permalinkId']
    if (permalinkId) {
      return `/${item.id}/`
    } else {
      return `/${item.slug}/`
    }
  })

  /**
   * site name
   * @returns {String} 
   */
  inject('sitename', () => {
    return context.store.state.common.storeLoadInit?.settings?.name
  })

  /**
   * metas
   * @returns {Array} 
   */
  inject('metas', () => {
    return context.store.state.common.storeLoadInit?.settings?.meta
  })

  /**
   * Favicon
   * @returns {String} 
   */
  inject('favicon', () => {
    return context.store.state.common.storeLoadInit?.settings?.setting?.favicon || null
  })

  inject('setLoading', (val) => {
    context.store.commit('common/storeLoadInit/STORE_SET_LOADING', val)
  })
}