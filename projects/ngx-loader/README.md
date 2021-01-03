# Angular loader NgxLoader

## Getting Started
***NgxLoader*** help you handle page loading, posting data to the server loading state and more others example of loading more easier.
- You have svg loaders integrated
- Loader  handle with a service state

## Installation
If you are a fan of `npm`
```console
npm install @ognanshissi/ngx-loader OR npm i @ognanshiss/ngx-loader
```
If you are a fan of `yarn`
```console
yarn add @ognanshissi/ngx-loader
```

## Usage
- Add `NgxLoaderModule` inside `app.module.ts` imports array
```typescript
import {NgxLoaderModule, NgxLoaderTypeEnum} from '@ognanshissi/ngx-loader';

@NgModule({
  // ..
  imports: [
    // ...
    NgxLoaderModule.forRoot({
      type: NgxLoaderTypeEnum.AUDIO
    })
    // ...
  ]
  // ...
})
export class AppModule {}
```
- Add `<ngx-loader></ngx-loader>` component inside `app.component.html` with configuration.

```html
  <ngx-loader></ngx-loader>
  <router-outlet></router-outlet>
```
