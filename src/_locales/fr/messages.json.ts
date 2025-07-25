import { exportAsMessages } from "../helpers.ts";

export default exportAsMessages({
  extensionName: "uBlacklist",
  extensionDescription:
    "Empêche des sites spécifiés d'apparaître dans les résultats de recherche Google",
  lang: "fr",
  error: "Erreur : $1",
  unauthorizedError:
    "Accès refusé. Veuillez désactiver et réactiver la synchronisation.",
  cancelButton: "Annuler",
  okButton: "OK",
  content_singleSiteBlocked: "uBlacklist a bloqué 1 site",
  content_multipleSitesBlocked: "uBlacklist a bloqué $1 sites",
  content_showBlockedSitesLink: "Afficher",
  content_hideBlockedSitesLink: "Cacher",
  content_blockSiteLink: "Bloquer ce site",
  content_unblockSiteLink: "Débloquer ce site",
  popup_blockSiteTitle: "Bloquer ce site",
  popup_unblockSiteTitle: "Débloquer ce site",
  popup_details: "Détails",
  popup_pageURLLabel: "URL de la page",
  popup_pathDepth: "Profondeur",
  popup_pageTitleLabel: "Titre de la page",
  popup_addedRulesLabel: "Règles à ajouter",
  popup_removedRulesLabel: "Règles à supprimer",
  popup_blockSiteButton: "Bloquer",
  popup_unblockSiteButton: "Débloquer",
  popup_openOptionsLink: "Options",
  popup_active: "uBlacklist est actif",
  popup_inactive: "uBlacklist est inactif",
  popup_activateButton: "Activer",
  options_generalTitle: "Général",
  options_blacklistLabel: "Sites bloqués des résultats de recherche Google",
  options_blacklistHelper:
    "Vous pouvez utiliser des [motifs](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) et des [expressions régulières](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_Expressions).",
  options_blacklistExample: "Exemple : $1",
  options_blockByTitle:
    'Préfixer "title" aux expressions régulières pour bloquer des sites avec leur titre de page.',
  options_blacklistUpdated: "Mis à jour",
  options_reloadBlacklistButton: "Recharger",
  options_importBlacklistButton: "Importer",
  options_exportBlacklistButton: "Exporter",
  options_saveBlacklistButton: "Sauvegarder",
  options_importBlacklistDialog_title: "Import",
  options_importBlacklistDialog_fromFile: "Importer depuis un fichier",
  options_importBlacklistDialog_selectFile: "Sélectionner un fichier",
  options_importBlacklistDialog_fromPB:
    "Importer depuis la liste de blocage personnelle",
  options_importBlacklistDialog_pbLabel: "Domaines",
  options_importBlacklistDialog_append: "Ajouter à la liste existante",
  options_importBlacklistDialog_importButton: "Importer",
  options_importBlacklistDialog_helper:
    "Coller les domaines exportés depuis la liste de blocage personnelle.",
  options_otherSearchEngines: "Support d'autres moteurs de recherche",
  options_otherSearchEnginesDescription:
    "Vous pouvez utiliser cette extension sur les moteurs de recherche suivants.",
  options_registerSearchEngine: "Activer",
  options_searchEngineRegistered: "Activé",
  options_skipBlockDialogLabel:
    'Ignorer la boite de dialogue "Bloquer ce site"',
  options_blockWholeSiteLabel:
    "Ajouter des règles pour bloquer tout le site par défaut",
  options_blockWholeSiteDescription:
    'Par exemple, pour bloquer la page "https://a.b.example.fr.com/", une règle "*://*.example.fr.com/*" sera ajoutée.',
  options_appearanceTitle: "Apparence",
  options_blockColor: "La couleur des résultats de recherche bloqués",
  options_colorUseDefault: "Valeur par défaut",
  options_colorSpecify: "Personnalisé",
  options_highlightColors:
    "Les couleurs des résultats de recherches mis en avant",
  options_highlightDescription:
    'Pour mettre en avant des résultats de recherche d\'une couleur N, préfixer "@N" aux règles.',
  options_highlightColorNth: "Couleur $1",
  options_highlightColorAdd: "Ajouter",
  options_highlightColorRemove: "Supprimer",
  options_dialogTheme:
    'Le thème de la boite de dialogue "Bloquer ce site" dans les résultats de recherche',
  options_dialogThemeDefault: "Valeur par défaut",
  options_dialogThemeLight: "Clair",
  options_dialogThemeDark: "Sombre",
  options_syncTitle: "Synchronisation",
  options_syncFeatureUpdated:
    'La fonction de synchronisation a été mise à jour. Pour continuer la synchronisation, appuyer sur le bouton "Activer la synchronisation".',
  options_syncFeature: "Synchroniser avec un cloud",
  options_syncFeatureDescription:
    "Vous pouvez synchroniser votre liste de filtres entre tous vos appareils avec un cloud.",
  options_turnOnSync: "Activer la synchronisation",
  options_turnOnSyncDialog_title: "Activer la synchronisation",
  options_turnOnSyncDialog_turnOnSyncButton: "Activer",
  options_turnOnSyncDialog_altFlowDescription:
    "Il se peut que les permissions pour accéder à $1 vous soient demandées avant l'authentification, mais vos informations personnelles ne seront PAS enregistrées dans ce domaine.",
  options_turnOnSyncDialog_altFlowAuthCodeLabel: "Code d'autorisation",
  options_turnOffSync: "Désactiver",
  options_syncResult: "Dernière synchronisation",
  options_syncNever: "Jamais synchroniser",
  options_syncRunning: "Synchronisation…",
  options_syncReloadButton: "Recharger",
  options_syncNowButton: "Synchroniser maintenant",
  options_syncCategories: "Que voulez-vous synchroniser ?",
  options_syncBlocklist: "Sites bloqués",
  options_syncGeneral: "Paramètres généraux",
  options_syncAppearance: "Apparence",
  options_syncSubscriptions: "Abonnements",
  options_syncInterval: "Intervalle de synchronisation",
  options_subscriptionTitle: "Abonnement",
  options_subscriptionFeature: "S'abonner à une liste de filtres",
  options_subscriptionFeatureDescription:
    "Si vous ajoutez un abonnement, les listes de filtres seront régulièrement téléchargées depuis l'URL spécifié.",
  options_addSubscriptionButton: "Ajouter un abonnement",
  options_subscriptionNameHeader: "Nom",
  options_subscriptionURLHeader: "URL",
  options_subscriptionUpdateResultHeader: "Dernière mise à jour",
  options_subscriptionCheckBoxLabel: "Activer",
  options_subscriptionMenuButtonLabel: "Menu",
  options_noSubscriptionsAdded: "Aucun abonnement ajouté",
  options_subscriptionUpdateRunning: "Mise à jour…",
  options_showSubscriptionMenu: "Afficher",
  options_updateSubscriptionNowMenu: "Mettre à jour maintenant",
  options_removeSubscriptionMenu: "Supprimer",
  options_updateAllSubscriptionsNowButton: "Mettre à jour maintenant",
  options_addSubscriptionDialog_title: "Ajouter un abonnement",
  options_addSubscriptionDialog_nameLabel: "Nom",
  options_addSubscriptionDialog_urlLabel: "URL",
  options_addSubscriptionDialog_addButton: "Ajouter",
  options_showSubscriptionDialog_blacklistLabel: "Règles",
  options_updateInterval: "Intervalle de mise à jour",
  options_backupRestoreTitle: "Sauvegarder et restaurer",
  options_backupSettingsLabel: "Sauvegarder les paramètres",
  options_backupSettingsButton: "Sauvegarder",
  options_restoreSettingsLabel: "Restaurer les paramètres",
  options_restoreSettingsButton: "Restaurer",
  options_restoreSettingsInvalidFile: "Le format de fichier est invalide.",
  options_resetSettingsLabel: "Réinitialiser les paramètres",
  options_resetSettingsButton: "Réinitialiser",
  options_resetSettingsConfirmation:
    "Voulez-vous vraiment réinitialiser vos paramètres ?",
  options_aboutTitle: "À propos de uBlacklist",
  options_aboutVersion: "Version",
  options_aboutDocumentation: "Documentation",
  options_aboutReleaseNotes: "Notes de mise à jour",
  options_aboutPrivacyPolicy: "Politique de confidentialité",
  options_aboutThirdPartyNotices: "Mentions tierces",
  clouds_googleDriveSync: "Synchronisation avec Google Drive",
  clouds_googleDriveSyncDescription:
    "Un fichier caché à l'utilisateur sera créé dans le dossier de données de l'application.",
  clouds_googleDriveSyncTurnedOn: "Synchronisé avec Google Drive",
  clouds_dropboxSync: "Synchronisation avec Dropbox",
  clouds_dropboxSyncDescription:
    'Un fichier sera crée dans "/Apps/uBlacklist/".',
  clouds_dropboxSyncTurnedOn: "Synchronisé avec Dropbox",
});
