// @ts-ignore
export const toImageUrl = processedImagePath => `url('${processedImagePath.slice(1).replaceAll('\\', '/')}')`