function createSectionInfoGetter () {

  const sections = {
    "new release": {
      destination: '/content/playlist/',
      reqCase: 2
    },

    "categories": {
      destination: '/content/categories/',
      reqCase: 1
    },

    "results:" : {
      destination: '/content/playlist/',
      reqCase: 3
    },

    "other": {
      destination: '/content/playlist/',
      reqCase: 1
    }
  }

  const getSection = (sectionName) => {
    const exists = sections.hasOwnProperty(sectionName)
    return exists ? sections[sectionName] : sections["other"]
  }

  return getSection
}

export const getSectionData = createSectionInfoGetter()

