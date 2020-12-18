import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Partners = {
  __typename?: 'Partners';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  partners?: Maybe<Array<Maybe<ComponentPersonPartner>>>;
};

export type PartnerInput = {
  partners?: Maybe<Array<Maybe<ComponentPersonPartnerInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPartnerInput = {
  partners?: Maybe<Array<Maybe<EditComponentPersonPartnerInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdatePartnerInput = {
  data?: Maybe<EditPartnerInput>;
};

export type UpdatePartnerPayload = {
  __typename?: 'updatePartnerPayload';
  partner?: Maybe<Partners>;
};

export type DeletePartnerPayload = {
  __typename?: 'deletePartnerPayload';
  partner?: Maybe<Partners>;
};

export enum Enum_Politicianresults_Category {
  Politician = 'politician',
  Commentator = 'commentator',
  Youth = 'youth'
}

export type PoliticianResults = {
  __typename?: 'PoliticianResults';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  rid?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  politician?: Maybe<ComponentPersonPolitician>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PoliticianResultsConnection = {
  __typename?: 'PoliticianResultsConnection';
  values?: Maybe<Array<Maybe<PoliticianResults>>>;
  groupBy?: Maybe<PoliticianResultsGroupBy>;
  aggregate?: Maybe<PoliticianResultsAggregator>;
};

export type PoliticianResultsAggregator = {
  __typename?: 'PoliticianResultsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PoliticianResultsGroupBy = {
  __typename?: 'PoliticianResultsGroupBy';
  id?: Maybe<Array<Maybe<PoliticianResultsConnectionId>>>;
  _id?: Maybe<Array<Maybe<PoliticianResultsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PoliticianResultsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PoliticianResultsConnectionUpdatedAt>>>;
  rid?: Maybe<Array<Maybe<PoliticianResultsConnectionRid>>>;
  category?: Maybe<Array<Maybe<PoliticianResultsConnectionCategory>>>;
  featured?: Maybe<Array<Maybe<PoliticianResultsConnectionFeatured>>>;
  politician?: Maybe<Array<Maybe<PoliticianResultsConnectionPolitician>>>;
  slug?: Maybe<Array<Maybe<PoliticianResultsConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<PoliticianResultsConnectionPublished_At>>>;
};

export type PoliticianResultsConnectionId = {
  __typename?: 'PoliticianResultsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnection_Id = {
  __typename?: 'PoliticianResultsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionCreatedAt = {
  __typename?: 'PoliticianResultsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionUpdatedAt = {
  __typename?: 'PoliticianResultsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionRid = {
  __typename?: 'PoliticianResultsConnectionRid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionCategory = {
  __typename?: 'PoliticianResultsConnectionCategory';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionFeatured = {
  __typename?: 'PoliticianResultsConnectionFeatured';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionPolitician = {
  __typename?: 'PoliticianResultsConnectionPolitician';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionSlug = {
  __typename?: 'PoliticianResultsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionPublished_At = {
  __typename?: 'PoliticianResultsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultInput = {
  rid?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  politician?: Maybe<ComponentPersonPoliticianInput>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPoliticianResultInput = {
  rid?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  politician?: Maybe<EditComponentPersonPoliticianInput>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePoliticianResultInput = {
  data?: Maybe<PoliticianResultInput>;
};

export type CreatePoliticianResultPayload = {
  __typename?: 'createPoliticianResultPayload';
  politicianResult?: Maybe<PoliticianResults>;
};

export type UpdatePoliticianResultInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPoliticianResultInput>;
};

export type UpdatePoliticianResultPayload = {
  __typename?: 'updatePoliticianResultPayload';
  politicianResult?: Maybe<PoliticianResults>;
};

export type DeletePoliticianResultInput = {
  where?: Maybe<InputId>;
};

export type DeletePoliticianResultPayload = {
  __typename?: 'deletePoliticianResultPayload';
  politicianResult?: Maybe<PoliticianResults>;
};

export enum Enum_Post_Category {
  News = 'news',
  View = 'view'
}

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  thumbnail?: Maybe<UploadFile>;
  category: Enum_Post_Category;
  featured: Scalars['Boolean'];
  title?: Maybe<ComponentTranslationShortTextTranslation>;
  content?: Maybe<ComponentTranslationRichTextTranslation>;
  subcategory?: Maybe<ComponentTranslationShortTextTranslation>;
  slug?: Maybe<ComponentTranslationShortTextTranslation>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  values?: Maybe<Array<Maybe<Post>>>;
  groupBy?: Maybe<PostGroupBy>;
  aggregate?: Maybe<PostAggregator>;
};

export type PostAggregator = {
  __typename?: 'PostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id?: Maybe<Array<Maybe<PostConnectionId>>>;
  _id?: Maybe<Array<Maybe<PostConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PostConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PostConnectionUpdatedAt>>>;
  thumbnail?: Maybe<Array<Maybe<PostConnectionThumbnail>>>;
  category?: Maybe<Array<Maybe<PostConnectionCategory>>>;
  featured?: Maybe<Array<Maybe<PostConnectionFeatured>>>;
  title?: Maybe<Array<Maybe<PostConnectionTitle>>>;
  content?: Maybe<Array<Maybe<PostConnectionContent>>>;
  subcategory?: Maybe<Array<Maybe<PostConnectionSubcategory>>>;
  slug?: Maybe<Array<Maybe<PostConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<PostConnectionPublished_At>>>;
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnection_Id = {
  __typename?: 'PostConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionCreatedAt = {
  __typename?: 'PostConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionUpdatedAt = {
  __typename?: 'PostConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionThumbnail = {
  __typename?: 'PostConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionCategory = {
  __typename?: 'PostConnectionCategory';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionFeatured = {
  __typename?: 'PostConnectionFeatured';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionTitle = {
  __typename?: 'PostConnectionTitle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionContent = {
  __typename?: 'PostConnectionContent';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSubcategory = {
  __typename?: 'PostConnectionSubcategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSlug = {
  __typename?: 'PostConnectionSlug';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionPublished_At = {
  __typename?: 'PostConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostInput = {
  thumbnail?: Maybe<Scalars['ID']>;
  category: Enum_Post_Category;
  featured?: Maybe<Scalars['Boolean']>;
  title: ComponentTranslationShortTextTranslationInput;
  content: ComponentTranslationRichTextTranslationInput;
  subcategory: ComponentTranslationShortTextTranslationInput;
  slug: ComponentTranslationShortTextTranslationInput;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  thumbnail?: Maybe<Scalars['ID']>;
  category?: Maybe<Enum_Post_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  title?: Maybe<EditComponentTranslationShortTextTranslationInput>;
  content?: Maybe<EditComponentTranslationRichTextTranslationInput>;
  subcategory?: Maybe<EditComponentTranslationShortTextTranslationInput>;
  slug?: Maybe<EditComponentTranslationShortTextTranslationInput>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Post>;
};

export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Post>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Post>;
};

export enum Enum_Talk_Type {
  Classic = 'classic',
  Mvsp = 'mvsp',
  Interview = 'interview'
}

export enum Enum_Talk_Lang {
  Pl = 'pl',
  En = 'en'
}

export type Talk = {
  __typename?: 'Talk';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Talk_Type>;
  url?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<UploadFile>;
  lang?: Maybe<Enum_Talk_Lang>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TalkConnection = {
  __typename?: 'TalkConnection';
  values?: Maybe<Array<Maybe<Talk>>>;
  groupBy?: Maybe<TalkGroupBy>;
  aggregate?: Maybe<TalkAggregator>;
};

export type TalkAggregator = {
  __typename?: 'TalkAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TalkGroupBy = {
  __typename?: 'TalkGroupBy';
  id?: Maybe<Array<Maybe<TalkConnectionId>>>;
  _id?: Maybe<Array<Maybe<TalkConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TalkConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TalkConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<TalkConnectionTitle>>>;
  start?: Maybe<Array<Maybe<TalkConnectionStart>>>;
  end?: Maybe<Array<Maybe<TalkConnectionEnd>>>;
  type?: Maybe<Array<Maybe<TalkConnectionType>>>;
  url?: Maybe<Array<Maybe<TalkConnectionUrl>>>;
  thumbnail?: Maybe<Array<Maybe<TalkConnectionThumbnail>>>;
  lang?: Maybe<Array<Maybe<TalkConnectionLang>>>;
  published_at?: Maybe<Array<Maybe<TalkConnectionPublished_At>>>;
};

export type TalkConnectionId = {
  __typename?: 'TalkConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnection_Id = {
  __typename?: 'TalkConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionCreatedAt = {
  __typename?: 'TalkConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionUpdatedAt = {
  __typename?: 'TalkConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionTitle = {
  __typename?: 'TalkConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionStart = {
  __typename?: 'TalkConnectionStart';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionEnd = {
  __typename?: 'TalkConnectionEnd';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionType = {
  __typename?: 'TalkConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionUrl = {
  __typename?: 'TalkConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionThumbnail = {
  __typename?: 'TalkConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionLang = {
  __typename?: 'TalkConnectionLang';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionPublished_At = {
  __typename?: 'TalkConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkInput = {
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Talk_Type>;
  url?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  lang?: Maybe<Enum_Talk_Lang>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTalkInput = {
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Talk_Type>;
  url?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  lang?: Maybe<Enum_Talk_Lang>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTalkInput = {
  data?: Maybe<TalkInput>;
};

export type CreateTalkPayload = {
  __typename?: 'createTalkPayload';
  talk?: Maybe<Talk>;
};

export type UpdateTalkInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTalkInput>;
};

export type UpdateTalkPayload = {
  __typename?: 'updateTalkPayload';
  talk?: Maybe<Talk>;
};

export type DeleteTalkInput = {
  where?: Maybe<InputId>;
};

export type DeleteTalkPayload = {
  __typename?: 'deleteTalkPayload';
  talk?: Maybe<Talk>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentPersonPartner = {
  __typename?: 'ComponentPersonPartner';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
};

export type ComponentPersonPartnerInput = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type EditComponentPersonPartnerInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type ComponentPersonPolitician = {
  __typename?: 'ComponentPersonPolitician';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  biography?: Maybe<ComponentTranslationLongTextTranslation>;
  name: Scalars['String'];
};

export type ComponentPersonPoliticianInput = {
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<ComponentTranslationLongTextTranslationInput>;
  name: Scalars['String'];
};

export type EditComponentPersonPoliticianInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<EditComponentTranslationLongTextTranslationInput>;
  name?: Maybe<Scalars['String']>;
};

export type ComponentTranslationLongTextTranslation = {
  __typename?: 'ComponentTranslationLongTextTranslation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type ComponentTranslationLongTextTranslationInput = {
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type EditComponentTranslationLongTextTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type ComponentTranslationRichTextTranslation = {
  __typename?: 'ComponentTranslationRichTextTranslation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  pl: Scalars['String'];
  en?: Maybe<Scalars['String']>;
};

export type ComponentTranslationRichTextTranslationInput = {
  pl: Scalars['String'];
  en?: Maybe<Scalars['String']>;
};

export type EditComponentTranslationRichTextTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type ComponentTranslationShortTextTranslation = {
  __typename?: 'ComponentTranslationShortTextTranslation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  pl: Scalars['String'];
  en?: Maybe<Scalars['String']>;
};

export type ComponentTranslationShortTextTranslationInput = {
  pl: Scalars['String'];
  en?: Maybe<Scalars['String']>;
};

export type EditComponentTranslationShortTextTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Partners | UpdatePartnerPayload | DeletePartnerPayload | PoliticianResults | PoliticianResultsConnection | PoliticianResultsAggregator | PoliticianResultsGroupBy | PoliticianResultsConnectionId | PoliticianResultsConnection_Id | PoliticianResultsConnectionCreatedAt | PoliticianResultsConnectionUpdatedAt | PoliticianResultsConnectionRid | PoliticianResultsConnectionCategory | PoliticianResultsConnectionFeatured | PoliticianResultsConnectionPolitician | PoliticianResultsConnectionSlug | PoliticianResultsConnectionPublished_At | CreatePoliticianResultPayload | UpdatePoliticianResultPayload | DeletePoliticianResultPayload | Post | PostConnection | PostAggregator | PostGroupBy | PostConnectionId | PostConnection_Id | PostConnectionCreatedAt | PostConnectionUpdatedAt | PostConnectionThumbnail | PostConnectionCategory | PostConnectionFeatured | PostConnectionTitle | PostConnectionContent | PostConnectionSubcategory | PostConnectionSlug | PostConnectionPublished_At | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Talk | TalkConnection | TalkAggregator | TalkGroupBy | TalkConnectionId | TalkConnection_Id | TalkConnectionCreatedAt | TalkConnectionUpdatedAt | TalkConnectionTitle | TalkConnectionStart | TalkConnectionEnd | TalkConnectionType | TalkConnectionUrl | TalkConnectionThumbnail | TalkConnectionLang | TalkConnectionPublished_At | CreateTalkPayload | UpdateTalkPayload | DeleteTalkPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentPersonPartner | ComponentPersonPolitician | ComponentTranslationLongTextTranslation | ComponentTranslationRichTextTranslation | ComponentTranslationShortTextTranslation;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  partner?: Maybe<Partners>;
  politicianResult?: Maybe<PoliticianResults>;
  politicianResults?: Maybe<Array<Maybe<PoliticianResults>>>;
  politicianResultsConnection?: Maybe<PoliticianResultsConnection>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsConnection?: Maybe<PostConnection>;
  talk?: Maybe<Talk>;
  talks?: Maybe<Array<Maybe<Talk>>>;
  talksConnection?: Maybe<TalkConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryPartnerArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPoliticianResultArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPoliticianResultsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPoliticianResultsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTalkArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTalksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTalksConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updatePartner?: Maybe<UpdatePartnerPayload>;
  deletePartner?: Maybe<DeletePartnerPayload>;
  createPoliticianResult?: Maybe<CreatePoliticianResultPayload>;
  updatePoliticianResult?: Maybe<UpdatePoliticianResultPayload>;
  deletePoliticianResult?: Maybe<DeletePoliticianResultPayload>;
  createPost?: Maybe<CreatePostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  createTalk?: Maybe<CreateTalkPayload>;
  updateTalk?: Maybe<UpdateTalkPayload>;
  deleteTalk?: Maybe<DeleteTalkPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdatePartnerArgs = {
  input?: Maybe<UpdatePartnerInput>;
};


export type MutationCreatePoliticianResultArgs = {
  input?: Maybe<CreatePoliticianResultInput>;
};


export type MutationUpdatePoliticianResultArgs = {
  input?: Maybe<UpdatePoliticianResultInput>;
};


export type MutationDeletePoliticianResultArgs = {
  input?: Maybe<DeletePoliticianResultInput>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<CreatePostInput>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<UpdatePostInput>;
};


export type MutationDeletePostArgs = {
  input?: Maybe<DeletePostInput>;
};


export type MutationCreateTalkArgs = {
  input?: Maybe<CreateTalkInput>;
};


export type MutationUpdateTalkArgs = {
  input?: Maybe<UpdateTalkInput>;
};


export type MutationDeleteTalkArgs = {
  input?: Maybe<DeleteTalkInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type BasicPostPartsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'published_at' | 'category'>
  & { title?: Maybe<(
    { __typename?: 'ComponentTranslationShortTextTranslation' }
    & Pick<ComponentTranslationShortTextTranslation, 'pl' | 'en'>
  )>, slug?: Maybe<(
    { __typename?: 'ComponentTranslationShortTextTranslation' }
    & Pick<ComponentTranslationShortTextTranslation, 'pl' | 'en'>
  )>, subcategory?: Maybe<(
    { __typename?: 'ComponentTranslationShortTextTranslation' }
    & Pick<ComponentTranslationShortTextTranslation, 'pl' | 'en'>
  )>, thumbnail?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'formats'>
  )> }
);

export type PostsByFilterQueryVariables = Exact<{
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
}>;


export type PostsByFilterQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & BasicPostPartsFragment
  )>>> }
);

export type BasicTalkPartsFragment = (
  { __typename?: 'Talk' }
  & Pick<Talk, 'id' | 'published_at' | 'title' | 'url' | 'lang' | 'start' | 'end'>
  & { thumbnail?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'formats'>
  )> }
);

export type TalksByFilterQueryVariables = Exact<{
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
}>;


export type TalksByFilterQuery = (
  { __typename?: 'Query' }
  & { talks?: Maybe<Array<Maybe<(
    { __typename?: 'Talk' }
    & BasicTalkPartsFragment
  )>>> }
);

export type PartnersQueryVariables = Exact<{ [key: string]: never; }>;


export type PartnersQuery = (
  { __typename?: 'Query' }
  & { partner?: Maybe<(
    { __typename?: 'Partners' }
    & Pick<Partners, 'id'>
    & { partners?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentPersonPartner' }
      & Pick<ComponentPersonPartner, 'name' | 'url'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'formats'>
      )> }
    )>>> }
  )> }
);

export const BasicPostPartsFragmentDoc = gql`
    fragment BasicPostParts on Post {
  id
  published_at
  category
  title {
    pl
    en
  }
  slug {
    pl
    en
  }
  subcategory {
    pl
    en
  }
  thumbnail {
    formats
  }
}
    `;
export const BasicTalkPartsFragmentDoc = gql`
    fragment BasicTalkParts on Talk {
  id
  published_at
  title
  url
  lang
  start
  end
  thumbnail {
    formats
  }
}
    `;
export const PostsByFilterDocument = gql`
    query PostsByFilter($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  posts(
    sort: $sort
    limit: $limit
    start: $start
    where: $where
    publicationState: $publicationState
  ) {
    ...BasicPostParts
  }
}
    ${BasicPostPartsFragmentDoc}`;

/**
 * __usePostsByFilterQuery__
 *
 * To run a query within a React component, call `usePostsByFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByFilterQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function usePostsByFilterQuery(baseOptions?: Apollo.QueryHookOptions<PostsByFilterQuery, PostsByFilterQueryVariables>) {
        return Apollo.useQuery<PostsByFilterQuery, PostsByFilterQueryVariables>(PostsByFilterDocument, baseOptions);
      }
export function usePostsByFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByFilterQuery, PostsByFilterQueryVariables>) {
          return Apollo.useLazyQuery<PostsByFilterQuery, PostsByFilterQueryVariables>(PostsByFilterDocument, baseOptions);
        }
export type PostsByFilterQueryHookResult = ReturnType<typeof usePostsByFilterQuery>;
export type PostsByFilterLazyQueryHookResult = ReturnType<typeof usePostsByFilterLazyQuery>;
export type PostsByFilterQueryResult = Apollo.QueryResult<PostsByFilterQuery, PostsByFilterQueryVariables>;
export const TalksByFilterDocument = gql`
    query TalksByFilter($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  talks(
    sort: $sort
    limit: $limit
    start: $start
    where: $where
    publicationState: $publicationState
  ) {
    ...BasicTalkParts
  }
}
    ${BasicTalkPartsFragmentDoc}`;

/**
 * __useTalksByFilterQuery__
 *
 * To run a query within a React component, call `useTalksByFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTalksByFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTalksByFilterQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useTalksByFilterQuery(baseOptions?: Apollo.QueryHookOptions<TalksByFilterQuery, TalksByFilterQueryVariables>) {
        return Apollo.useQuery<TalksByFilterQuery, TalksByFilterQueryVariables>(TalksByFilterDocument, baseOptions);
      }
export function useTalksByFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TalksByFilterQuery, TalksByFilterQueryVariables>) {
          return Apollo.useLazyQuery<TalksByFilterQuery, TalksByFilterQueryVariables>(TalksByFilterDocument, baseOptions);
        }
export type TalksByFilterQueryHookResult = ReturnType<typeof useTalksByFilterQuery>;
export type TalksByFilterLazyQueryHookResult = ReturnType<typeof useTalksByFilterLazyQuery>;
export type TalksByFilterQueryResult = Apollo.QueryResult<TalksByFilterQuery, TalksByFilterQueryVariables>;
export const PartnersDocument = gql`
    query Partners {
  partner {
    id
    partners {
      name
      image {
        formats
      }
      url
    }
  }
}
    `;

/**
 * __usePartnersQuery__
 *
 * To run a query within a React component, call `usePartnersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePartnersQuery(baseOptions?: Apollo.QueryHookOptions<PartnersQuery, PartnersQueryVariables>) {
        return Apollo.useQuery<PartnersQuery, PartnersQueryVariables>(PartnersDocument, baseOptions);
      }
export function usePartnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnersQuery, PartnersQueryVariables>) {
          return Apollo.useLazyQuery<PartnersQuery, PartnersQueryVariables>(PartnersDocument, baseOptions);
        }
export type PartnersQueryHookResult = ReturnType<typeof usePartnersQuery>;
export type PartnersLazyQueryHookResult = ReturnType<typeof usePartnersLazyQuery>;
export type PartnersQueryResult = Apollo.QueryResult<PartnersQuery, PartnersQueryVariables>;