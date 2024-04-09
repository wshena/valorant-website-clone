export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: any; // Adjust type if needed
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  recruitmentData: any; // Adjust type if needed
  abilities: Ability[];
  voiceLine: any; // Adjust type if needed
}

export interface MapData {
  uuid: string;
  displayName: string;
  narrativeDescription: string;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  stylizedBackgroundImage: string;
  premierBackgroundImage: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: {
      regionName: string;
      superRegionName: string;
      location: {
          x: number;
          y: number;
      };
  }[];
}

export interface Weapon {
  uuid: string;
  displayName: string; // localized
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
  };
  adsStats: {
    zoomMultiplier: number;
    fireRate: number;
    runSpeedMultiplier: number;
    burstCount: number;
    firstBulletAccuracy: number;
  };
  altShotgunStats: {
    shotgunPelletCount: number;
    burstRate: number;
  };
  airBurstStats: {
    shotgunPelletCount: number;
    burstDistance: number;
  };
  damageRanges: {
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;
  }[];
  shopData: {
    cost: number;
    category: string;
    shopOrderPriority: number;
    categoryText: string; // localized
    gridPosition: {
      row: number;
      column: number;
    };
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
  };
  skins: {
    uuid: string;
    displayName: string; // localized
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: string;
    assetPath: string;
    chromas: {
      uuid: string;
      displayName: string; // localized
      displayIcon: string;
      fullRender: string;
      swatch: string;
      streamedVideo: string;
      assetPath: string;
    }[];
    levels: {
      uuid: string;
      displayName: string; // localized
      levelItem: string;
      displayIcon: string;
      streamedVideo: string;
      assetPath: string;
    }[];
  }[];
}


export interface Icon {
  size: number;
  color: string
}

export interface NavbarDropdown {
  id: number;
  title: string;
  link: string
}