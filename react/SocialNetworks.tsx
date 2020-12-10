import type { PropsWithChildren } from 'react'
import React from 'react'
import { IOMessage } from 'vtex.native-types'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { useCssHandles } from 'vtex.css-handles'

import SocialNetwork, {
  CSS_HANDLES as SocialNetworkHandles,
} from './components/SocialNetwork'

const CSS_HANDLES = [
  'socialNetworksTitle',
  'socialNetworksContainer',
  'socialNetworkWrapper',
  ...SocialNetworkHandles,
] as const

interface SocialNetworkData {
  url: string
  name: string
}

interface Props {
  /** Section title */
  title?: string
  /** List of social networks to display */
  socialNetworks: SocialNetworkData[]
  /** Define if social network icons will be coloured */
  showInColor: boolean
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

function SocialNetworks({
  title,
  showInColor,
  socialNetworks = [],
  classes,
}: PropsWithChildren<Props>) {
  const { handles } = useCssHandles(CSS_HANDLES, {
    classes,
  })

  return (
    <div className={handles.socialNetworkWrapper}>
      {title && (
        <div className={`${handles.socialNetworksTitle} mb4`}>
          <IOMessage id={title} />
        </div>
      )}
      <div className={`${handles.socialNetworksContainer} nh2 flex`}>
        {socialNetworks.map((socialNetworkData) => (
          <SocialNetwork
            key={socialNetworkData.name + socialNetworkData.url}
            showInColor={showInColor}
            url={socialNetworkData.url}
            name={socialNetworkData.name}
            handles={handles}
          />
        ))}
      </div>
    </div>
  )
}

SocialNetworks.schema = {
  title: 'admin/editor.footer.socialNetworks.title',
  description: 'admin/editor.footer.socialNetworks.description',
  type: 'object',
  properties: {
    showInColor: {
      default: false,
      isLayout: true,
      title: 'admin/editor.footer.showSocialNetworksInColor.title',
      type: 'boolean',
    },
  },
}

export default SocialNetworks
