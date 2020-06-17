// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://graph.microsoft.com/v1.0/users',
  scopeUri: ['user.read'], // ['api://d865bf85-0e22-42ec-9e74-bdcf0178f9af/retiro'],
  tenantId: 'f8733e19-5615-4258-907e-cb8c982ffc34',
  uiClienId: '8c757de3-f9f8-41da-80ad-fdcdb15ff46d',
  redirectUrl: 'http://localhost:4200',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
