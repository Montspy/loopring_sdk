[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / ReqParams

# Interface: ReqParams

## Table of contents

### Properties

- [apiKey](ReqParams.md#apikey)
- [bodyParams](ReqParams.md#bodyparams)
- [ecdsaSignature](ReqParams.md#ecdsasignature)
- [eddsaSignature](ReqParams.md#eddsasignature)
- [method](ReqParams.md#method)
- [queryParams](ReqParams.md#queryparams)
- [sigFlag](ReqParams.md#sigflag)
- [sigObj](ReqParams.md#sigobj)
- [url](ReqParams.md#url)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[defs/loopring_defs.ts:61](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L61)

___

### bodyParams

• `Optional` **bodyParams**: `any`

#### Defined in

[defs/loopring_defs.ts:59](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L59)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

#### Defined in

[defs/loopring_defs.ts:76](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L76)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

#### Defined in

[defs/loopring_defs.ts:75](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L75)

___

### method

• **method**: [`ReqMethod`](../enums/ReqMethod.md)

#### Defined in

[defs/loopring_defs.ts:55](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L55)

___

### queryParams

• `Optional` **queryParams**: `any`

#### Defined in

[defs/loopring_defs.ts:58](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L58)

___

### sigFlag

• **sigFlag**: [`SIG_FLAG`](../enums/SIG_FLAG.md)

#### Defined in

[defs/loopring_defs.ts:56](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L56)

___

### sigObj

• `Optional` **sigObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PrivateKey?` | `string` |
| `dataToSig?` | `any` |
| `hasDataStruct?` | `boolean` |
| `owner?` | `string` |
| `pwd?` | `string` |
| `sig?` | `string` |
| `sigPatch?` | `string` |
| `web3?` | `any` |

#### Defined in

[defs/loopring_defs.ts:63](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L63)

___

### url

• **url**: `string`

#### Defined in

[defs/loopring_defs.ts:54](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L54)
