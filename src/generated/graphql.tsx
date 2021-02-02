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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  description?: Maybe<ComponentTranslationLongTextTranslation>;
  socials?: Maybe<ComponentCommonSocials>;
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type AuthorPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AuthorAggregator = {
  __typename?: 'AuthorAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  values?: Maybe<Array<Maybe<Author>>>;
  groupBy?: Maybe<AuthorGroupBy>;
  aggregate?: Maybe<AuthorAggregator>;
};

export type AuthorConnection_Id = {
  __typename?: 'AuthorConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionCreatedAt = {
  __typename?: 'AuthorConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionDescription = {
  __typename?: 'AuthorConnectionDescription';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionId = {
  __typename?: 'AuthorConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionImage = {
  __typename?: 'AuthorConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionName = {
  __typename?: 'AuthorConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionSocials = {
  __typename?: 'AuthorConnectionSocials';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorConnectionUpdatedAt = {
  __typename?: 'AuthorConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AuthorConnection>;
};

export type AuthorGroupBy = {
  __typename?: 'AuthorGroupBy';
  id?: Maybe<Array<Maybe<AuthorConnectionId>>>;
  _id?: Maybe<Array<Maybe<AuthorConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<AuthorConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<AuthorConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<AuthorConnectionName>>>;
  image?: Maybe<Array<Maybe<AuthorConnectionImage>>>;
  description?: Maybe<Array<Maybe<AuthorConnectionDescription>>>;
  socials?: Maybe<Array<Maybe<AuthorConnectionSocials>>>;
};

export type AuthorInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<ComponentTranslationLongTextTranslationInput>;
  socials?: Maybe<ComponentCommonSocialInput>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentCommonSocialInput = {
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type ComponentCommonSocials = {
  __typename?: 'ComponentCommonSocials';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
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

export type CreateAuthorInput = {
  data?: Maybe<AuthorInput>;
};

export type CreateAuthorPayload = {
  __typename?: 'createAuthorPayload';
  author?: Maybe<Author>;
};

export type CreatePoliticianInput = {
  data?: Maybe<PoliticianInput>;
};

export type CreatePoliticianPayload = {
  __typename?: 'createPoliticianPayload';
  politician?: Maybe<Politician>;
};

export type CreatePoliticianResultInput = {
  data?: Maybe<PoliticianResultInput>;
};

export type CreatePoliticianResultPayload = {
  __typename?: 'createPoliticianResultPayload';
  politicianResult?: Maybe<PoliticianResults>;
};

export type CreatePostInput = {
  data?: Maybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Post>;
};

export type CreateTalkInput = {
  data?: Maybe<TalkInput>;
};

export type CreateTalkPayload = {
  __typename?: 'createTalkPayload';
  talk?: Maybe<Talk>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};



export type DeleteAuthorInput = {
  where?: Maybe<InputId>;
};

export type DeleteAuthorPayload = {
  __typename?: 'deleteAuthorPayload';
  author?: Maybe<Author>;
};

export type DeleteDocumentPayload = {
  __typename?: 'deleteDocumentPayload';
  document?: Maybe<Documents>;
};

export type DeletePartnerPayload = {
  __typename?: 'deletePartnerPayload';
  partner?: Maybe<Partners>;
};

export type DeletePoliticianInput = {
  where?: Maybe<InputId>;
};

export type DeletePoliticianPayload = {
  __typename?: 'deletePoliticianPayload';
  politician?: Maybe<Politician>;
};

export type DeletePoliticianResultInput = {
  where?: Maybe<InputId>;
};

export type DeletePoliticianResultPayload = {
  __typename?: 'deletePoliticianResultPayload';
  politicianResult?: Maybe<PoliticianResults>;
};

export type DeletePostInput = {
  where?: Maybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Post>;
};

export type DeleteTalkInput = {
  where?: Maybe<InputId>;
};

export type DeleteTalkPayload = {
  __typename?: 'deleteTalkPayload';
  talk?: Maybe<Talk>;
};

export type DocumentInput = {
  rules?: Maybe<ComponentTranslationRichTextTranslationInput>;
  privacy?: Maybe<ComponentTranslationRichTextTranslationInput>;
  gdpr?: Maybe<ComponentTranslationRichTextTranslationInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Documents = {
  __typename?: 'Documents';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  rules?: Maybe<ComponentTranslationRichTextTranslation>;
  privacy?: Maybe<ComponentTranslationRichTextTranslation>;
  gdpr?: Maybe<ComponentTranslationRichTextTranslation>;
};

export type EditAuthorInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<EditComponentTranslationLongTextTranslationInput>;
  socials?: Maybe<EditComponentCommonSocialInput>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentCommonSocialInput = {
  id?: Maybe<Scalars['ID']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type EditComponentPersonPartnerInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type EditComponentPersonPoliticianInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<EditComponentTranslationLongTextTranslationInput>;
  name?: Maybe<Scalars['String']>;
};

export type EditComponentTranslationLongTextTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type EditComponentTranslationRichTextTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type EditComponentTranslationShortTextTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type EditDocumentInput = {
  rules?: Maybe<EditComponentTranslationRichTextTranslationInput>;
  privacy?: Maybe<EditComponentTranslationRichTextTranslationInput>;
  gdpr?: Maybe<EditComponentTranslationRichTextTranslationInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPartnerInput = {
  partners?: Maybe<Array<Maybe<EditComponentPersonPartnerInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPoliticianInput = {
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<EditComponentTranslationLongTextTranslationInput>;
  name?: Maybe<Scalars['String']>;
  politician_results?: Maybe<Array<Maybe<Scalars['ID']>>>;
  talks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPoliticianResultInput = {
  rid?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  politician?: Maybe<Scalars['ID']>;
  quiz_slug?: Maybe<Enum_Politicianresults_Quiz_Slug>;
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
  authors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  default_title?: Maybe<Scalars['String']>;
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
  politicians?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
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

export enum Enum_Politicianresults_Category {
  Politician = 'politician',
  Commentator = 'commentator',
  Youth = 'youth'
}

export enum Enum_Politicianresults_Quiz_Slug {
  Mypolitics = 'mypolitics'
}

export enum Enum_Post_Category {
  News = 'news',
  View = 'view'
}

export enum Enum_Talk_Lang {
  Pl = 'pl',
  En = 'en'
}

export enum Enum_Talk_Type {
  Classic = 'classic',
  Mvsp = 'mvsp',
  Interview = 'interview'
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Author | AuthorConnection | AuthorAggregator | AuthorGroupBy | AuthorConnectionId | AuthorConnection_Id | AuthorConnectionCreatedAt | AuthorConnectionUpdatedAt | AuthorConnectionName | AuthorConnectionImage | AuthorConnectionDescription | AuthorConnectionSocials | CreateAuthorPayload | UpdateAuthorPayload | DeleteAuthorPayload | Documents | UpdateDocumentPayload | DeleteDocumentPayload | Partners | UpdatePartnerPayload | DeletePartnerPayload | PoliticianResults | PoliticianResultsConnection | PoliticianResultsAggregator | PoliticianResultsGroupBy | PoliticianResultsConnectionId | PoliticianResultsConnection_Id | PoliticianResultsConnectionCreatedAt | PoliticianResultsConnectionUpdatedAt | PoliticianResultsConnectionRid | PoliticianResultsConnectionCategory | PoliticianResultsConnectionFeatured | PoliticianResultsConnectionSlug | PoliticianResultsConnectionPolitician | PoliticianResultsConnectionQuiz_Slug | CreatePoliticianResultPayload | UpdatePoliticianResultPayload | DeletePoliticianResultPayload | Politician | PoliticianConnection | PoliticianAggregator | PoliticianGroupBy | PoliticianConnectionId | PoliticianConnection_Id | PoliticianConnectionCreatedAt | PoliticianConnectionUpdatedAt | PoliticianConnectionImage | PoliticianConnectionBiography | PoliticianConnectionName | CreatePoliticianPayload | UpdatePoliticianPayload | DeletePoliticianPayload | Post | PostConnection | PostAggregator | PostGroupBy | PostConnectionId | PostConnection_Id | PostConnectionCreatedAt | PostConnectionUpdatedAt | PostConnectionThumbnail | PostConnectionCategory | PostConnectionFeatured | PostConnectionTitle | PostConnectionContent | PostConnectionSubcategory | PostConnectionSlug | PostConnectionDefault_Title | PostConnectionPublished_At | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Talk | TalkConnection | TalkAggregator | TalkGroupBy | TalkConnectionId | TalkConnection_Id | TalkConnectionCreatedAt | TalkConnectionUpdatedAt | TalkConnectionTitle | TalkConnectionStart | TalkConnectionEnd | TalkConnectionType | TalkConnectionUrl | TalkConnectionThumbnail | TalkConnectionLang | TalkConnectionPublished_At | CreateTalkPayload | UpdateTalkPayload | DeleteTalkPayload | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | CreateUserPayload | UpdateUserPayload | ComponentCommonSocials | ComponentPersonPartner | ComponentPersonPolitician | ComponentTranslationLongTextTranslation | ComponentTranslationRichTextTranslation | ComponentTranslationShortTextTranslation;

export type PartnerInput = {
  partners?: Maybe<Array<Maybe<ComponentPersonPartnerInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Partners = {
  __typename?: 'Partners';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  partners?: Maybe<Array<Maybe<ComponentPersonPartner>>>;
};

export type Politician = {
  __typename?: 'Politician';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  image?: Maybe<UploadFile>;
  biography?: Maybe<ComponentTranslationLongTextTranslation>;
  name?: Maybe<Scalars['String']>;
  politician_results?: Maybe<Array<Maybe<PoliticianResults>>>;
  talks?: Maybe<Array<Maybe<Talk>>>;
};


export type PoliticianPolitician_ResultsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type PoliticianTalksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PoliticianAggregator = {
  __typename?: 'PoliticianAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PoliticianConnection = {
  __typename?: 'PoliticianConnection';
  values?: Maybe<Array<Maybe<Politician>>>;
  groupBy?: Maybe<PoliticianGroupBy>;
  aggregate?: Maybe<PoliticianAggregator>;
};

export type PoliticianConnection_Id = {
  __typename?: 'PoliticianConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianConnectionBiography = {
  __typename?: 'PoliticianConnectionBiography';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianConnectionCreatedAt = {
  __typename?: 'PoliticianConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianConnectionId = {
  __typename?: 'PoliticianConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianConnectionImage = {
  __typename?: 'PoliticianConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianConnectionName = {
  __typename?: 'PoliticianConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianConnectionUpdatedAt = {
  __typename?: 'PoliticianConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianConnection>;
};

export type PoliticianGroupBy = {
  __typename?: 'PoliticianGroupBy';
  id?: Maybe<Array<Maybe<PoliticianConnectionId>>>;
  _id?: Maybe<Array<Maybe<PoliticianConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PoliticianConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PoliticianConnectionUpdatedAt>>>;
  image?: Maybe<Array<Maybe<PoliticianConnectionImage>>>;
  biography?: Maybe<Array<Maybe<PoliticianConnectionBiography>>>;
  name?: Maybe<Array<Maybe<PoliticianConnectionName>>>;
};

export type PoliticianInput = {
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<ComponentTranslationLongTextTranslationInput>;
  name?: Maybe<Scalars['String']>;
  politician_results?: Maybe<Array<Maybe<Scalars['ID']>>>;
  talks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PoliticianResultInput = {
  rid?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  politician?: Maybe<Scalars['ID']>;
  quiz_slug?: Maybe<Enum_Politicianresults_Quiz_Slug>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PoliticianResults = {
  __typename?: 'PoliticianResults';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  rid?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
  featured?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  politician?: Maybe<Politician>;
  quiz_slug?: Maybe<Enum_Politicianresults_Quiz_Slug>;
};

export type PoliticianResultsAggregator = {
  __typename?: 'PoliticianResultsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PoliticianResultsConnection = {
  __typename?: 'PoliticianResultsConnection';
  values?: Maybe<Array<Maybe<PoliticianResults>>>;
  groupBy?: Maybe<PoliticianResultsGroupBy>;
  aggregate?: Maybe<PoliticianResultsAggregator>;
};

export type PoliticianResultsConnection_Id = {
  __typename?: 'PoliticianResultsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionCategory = {
  __typename?: 'PoliticianResultsConnectionCategory';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionCreatedAt = {
  __typename?: 'PoliticianResultsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionFeatured = {
  __typename?: 'PoliticianResultsConnectionFeatured';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionId = {
  __typename?: 'PoliticianResultsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionPolitician = {
  __typename?: 'PoliticianResultsConnectionPolitician';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionQuiz_Slug = {
  __typename?: 'PoliticianResultsConnectionQuiz_slug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionRid = {
  __typename?: 'PoliticianResultsConnectionRid';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionSlug = {
  __typename?: 'PoliticianResultsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PoliticianResultsConnection>;
};

export type PoliticianResultsConnectionUpdatedAt = {
  __typename?: 'PoliticianResultsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PoliticianResultsConnection>;
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
  slug?: Maybe<Array<Maybe<PoliticianResultsConnectionSlug>>>;
  politician?: Maybe<Array<Maybe<PoliticianResultsConnectionPolitician>>>;
  quiz_slug?: Maybe<Array<Maybe<PoliticianResultsConnectionQuiz_Slug>>>;
};

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
  default_title?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  authors?: Maybe<Array<Maybe<Author>>>;
};


export type PostAuthorsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PostAggregator = {
  __typename?: 'PostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  values?: Maybe<Array<Maybe<Post>>>;
  groupBy?: Maybe<PostGroupBy>;
  aggregate?: Maybe<PostAggregator>;
};

export type PostConnection_Id = {
  __typename?: 'PostConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionCategory = {
  __typename?: 'PostConnectionCategory';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionContent = {
  __typename?: 'PostConnectionContent';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionCreatedAt = {
  __typename?: 'PostConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionDefault_Title = {
  __typename?: 'PostConnectionDefault_title';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionFeatured = {
  __typename?: 'PostConnectionFeatured';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionPublished_At = {
  __typename?: 'PostConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSlug = {
  __typename?: 'PostConnectionSlug';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionSubcategory = {
  __typename?: 'PostConnectionSubcategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionThumbnail = {
  __typename?: 'PostConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionTitle = {
  __typename?: 'PostConnectionTitle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionUpdatedAt = {
  __typename?: 'PostConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
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
  default_title?: Maybe<Array<Maybe<PostConnectionDefault_Title>>>;
  published_at?: Maybe<Array<Maybe<PostConnectionPublished_At>>>;
};

export type PostInput = {
  thumbnail?: Maybe<Scalars['ID']>;
  category: Enum_Post_Category;
  featured?: Maybe<Scalars['Boolean']>;
  title: ComponentTranslationShortTextTranslationInput;
  content: ComponentTranslationRichTextTranslationInput;
  subcategory: ComponentTranslationShortTextTranslationInput;
  slug: ComponentTranslationShortTextTranslationInput;
  authors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  default_title?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
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
  politicians?: Maybe<Array<Maybe<Politician>>>;
};


export type TalkPoliticiansArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TalkAggregator = {
  __typename?: 'TalkAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TalkConnection = {
  __typename?: 'TalkConnection';
  values?: Maybe<Array<Maybe<Talk>>>;
  groupBy?: Maybe<TalkGroupBy>;
  aggregate?: Maybe<TalkAggregator>;
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

export type TalkConnectionEnd = {
  __typename?: 'TalkConnectionEnd';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionId = {
  __typename?: 'TalkConnectionId';
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

export type TalkConnectionStart = {
  __typename?: 'TalkConnectionStart';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionThumbnail = {
  __typename?: 'TalkConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionTitle = {
  __typename?: 'TalkConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionType = {
  __typename?: 'TalkConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionUpdatedAt = {
  __typename?: 'TalkConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TalkConnection>;
};

export type TalkConnectionUrl = {
  __typename?: 'TalkConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TalkConnection>;
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

export type TalkInput = {
  title?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Enum_Talk_Type>;
  url?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  lang?: Maybe<Enum_Talk_Lang>;
  politicians?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UpdateAuthorInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAuthorInput>;
};

export type UpdateAuthorPayload = {
  __typename?: 'updateAuthorPayload';
  author?: Maybe<Author>;
};

export type UpdateDocumentInput = {
  data?: Maybe<EditDocumentInput>;
};

export type UpdateDocumentPayload = {
  __typename?: 'updateDocumentPayload';
  document?: Maybe<Documents>;
};

export type UpdatePartnerInput = {
  data?: Maybe<EditPartnerInput>;
};

export type UpdatePartnerPayload = {
  __typename?: 'updatePartnerPayload';
  partner?: Maybe<Partners>;
};

export type UpdatePoliticianInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPoliticianInput>;
};

export type UpdatePoliticianPayload = {
  __typename?: 'updatePoliticianPayload';
  politician?: Maybe<Politician>;
};

export type UpdatePoliticianResultInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPoliticianResultInput>;
};

export type UpdatePoliticianResultPayload = {
  __typename?: 'updatePoliticianResultPayload';
  politicianResult?: Maybe<PoliticianResults>;
};

export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Post>;
};

export type UpdateTalkInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTalkInput>;
};

export type UpdateTalkPayload = {
  __typename?: 'updateTalkPayload';
  talk?: Maybe<Talk>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
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

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
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

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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

export enum Country {
  Poland = 'POLAND',
  England = 'ENGLAND',
  UnitedStates = 'UNITED_STATES'
}

export type CreateIdeologyInput = {
  name: TextTranslationInput;
  description: TextTranslationInput;
  color: Scalars['String'];
  icon: IdeologyIconInput;
};

export type CreatePartyInput = {
  name: Scalars['String'];
  logoUrl: Scalars['String'];
  country: Country;
};

export type CreateQuestionInput = {
  text: TextTranslationInput;
  effects: QuestionEffectsInput;
};

export type CreateQuizInput = {
  slug: Scalars['String'];
  logoUrl: Scalars['String'];
  title: TextTranslationInput;
  description: TextTranslationInput;
  meta: QuizMetaInput;
};

export type CreateQuizVersionInput = {
  publishedOn?: Maybe<Scalars['String']>;
  axes: Array<Maybe<QuizAxisInput>>;
  parent?: Maybe<Scalars['String']>;
  compassModes: Array<Maybe<QuizCompassModeInput>>;
};

export type CreateRespondentInput = {
  lang: Language;
};

export type CreateSurveyInput = {
  quizVersion: Scalars['String'];
};

export type Ideology = {
  __typename?: 'Ideology';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: TextTranslation;
  description: TextTranslation;
  color: Scalars['String'];
  icon: IdeologyIcon;
};

export type IdeologyIcon = {
  __typename?: 'IdeologyIcon';
  type: Scalars['String'];
  value: Scalars['String'];
};

export type IdeologyIconInput = {
  type: Scalars['String'];
  value: Scalars['String'];
};

export enum Language {
  Polish = 'POLISH',
  English = 'ENGLISH'
}

export type Party = {
  __typename?: 'Party';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  logoUrl: Scalars['String'];
  country: Country;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  text: TextTranslation;
  effects: QuestionEffects;
};

export type QuestionEffects = {
  __typename?: 'QuestionEffects';
  agree: QuestionPositiveEffect;
  disagree: QuestionPositiveEffect;
};

export type QuestionEffectsInput = {
  agree: QuestionPositiveEffectInput;
  disagree: QuestionPositiveEffectInput;
};

export type QuestionPositiveEffect = {
  __typename?: 'QuestionPositiveEffect';
  ideologies: Array<Maybe<Ideology>>;
  parties: Array<Maybe<Party>>;
};

export type QuestionPositiveEffectInput = {
  ideologies: Array<Scalars['String']>;
  parties: Array<Scalars['String']>;
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  logoUrl: Scalars['String'];
  title: TextTranslation;
  description: TextTranslation;
  meta: QuizMeta;
  currentVersion: QuizVersion;
  versions: Array<Maybe<QuizVersion>>;
};

export type QuizAuthor = {
  __typename?: 'QuizAuthor';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type QuizAuthorInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type QuizAxis = {
  __typename?: 'QuizAxis';
  id: Scalars['String'];
  name?: Maybe<TextTranslation>;
  left: Ideology;
  right: Ideology;
};

export type QuizAxisInput = {
  name?: Maybe<TextTranslationInput>;
  left: Scalars['String'];
  right: Scalars['String'];
};

export type QuizCompassAxis = {
  __typename?: 'QuizCompassAxis';
  name?: Maybe<TextTranslation>;
  leftIdeologies: Array<QuizCompassIdeology>;
  rightIdeologies: Array<QuizCompassIdeology>;
};

export type QuizCompassAxisInput = {
  name: TextTranslationInput;
  leftIdeologies: Array<QuizCompassIdeologyInput>;
  rightIdeologies: Array<QuizCompassIdeologyInput>;
};

export type QuizCompassIdeology = {
  __typename?: 'QuizCompassIdeology';
  ideology: Ideology;
  weight: Scalars['Int'];
};

export type QuizCompassIdeologyInput = {
  ideology: Scalars['String'];
  weight: Scalars['Int'];
};

export type QuizCompassMode = {
  __typename?: 'QuizCompassMode';
  name: TextTranslation;
  horizontal: QuizCompassAxis;
  vertical: QuizCompassAxis;
  third?: Maybe<QuizCompassAxis>;
};

export type QuizCompassModeInput = {
  name: TextTranslationInput;
  horizontal: QuizCompassAxisInput;
  vertical: QuizCompassAxisInput;
  third?: Maybe<QuizCompassAxisInput>;
};

export type QuizFeatures = {
  __typename?: 'QuizFeatures';
  compass: Scalars['Boolean'];
  axesNumber: Scalars['Int'];
  questionsNumber: Scalars['Int'];
  parties: Scalars['Boolean'];
  politiciansResults: Scalars['Boolean'];
  authorizedParties: Array<Maybe<Party>>;
};

export type QuizFeaturesInput = {
  authorizedParties: Array<Scalars['String']>;
  parties: Scalars['Boolean'];
  politiciansResults: Scalars['Boolean'];
};

export enum QuizLicense {
  Commercial = 'COMMERCIAL',
  Mit = 'MIT'
}

export type QuizMeta = {
  __typename?: 'QuizMeta';
  features: QuizFeatures;
  statistics: QuizStatistics;
  author: QuizAuthor;
  license: QuizLicense;
};

export type QuizMetaInput = {
  features: QuizFeaturesInput;
  statistics: QuizStatisticsInput;
  author: QuizAuthorInput;
  license: QuizLicense;
};

export type QuizStatistics = {
  __typename?: 'QuizStatistics';
  surveysNumber: Scalars['Int'];
};

export type QuizStatisticsInput = {
  surveysNumber: Scalars['Int'];
};

export type QuizVersion = {
  __typename?: 'QuizVersion';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  publishedOn?: Maybe<Scalars['DateTime']>;
  axes: Array<Maybe<QuizAxis>>;
  parent?: Maybe<QuizVersion>;
  questions: Array<Maybe<Question>>;
  compassModes: Array<Maybe<QuizCompassMode>>;
  quiz: Quiz;
};

export type Respondent = {
  __typename?: 'Respondent';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Array<Scalars['String']>;
  details?: Maybe<RespondentDetails>;
  surveys: Array<Maybe<Survey>>;
};

export type RespondentDetails = {
  __typename?: 'RespondentDetails';
  ideology: Scalars['String'];
  compassPoint: Array<Scalars['Float']>;
};

export type RespondentDetailsInput = {
  ideology: Scalars['String'];
  compassPoint: Array<Scalars['Float']>;
};

export type Results = {
  __typename?: 'Results';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  axes: Array<ResultsAxis>;
  parties: Array<ResultsParty>;
  compasses: Array<ResultsCompass>;
  quiz: Quiz;
};

export type ResultsAxis = {
  __typename?: 'ResultsAxis';
  name?: Maybe<TextTranslation>;
  left: ResultsIdeology;
  right: ResultsIdeology;
  maxPoints: Scalars['Int'];
};

export type ResultsCompass = {
  __typename?: 'ResultsCompass';
  name: TextTranslation;
  horizontal: QuizCompassAxis;
  vertical: QuizCompassAxis;
  third?: Maybe<QuizCompassAxis>;
  point: ResultsCompassPoint;
};

export type ResultsCompassPoint = {
  __typename?: 'ResultsCompassPoint';
  horizontal: Scalars['Float'];
  vertical: Scalars['Float'];
  third?: Maybe<Scalars['Float']>;
};

export type ResultsIdeology = {
  __typename?: 'ResultsIdeology';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: TextTranslation;
  description: TextTranslation;
  color: Scalars['String'];
  icon: IdeologyIcon;
  points: Scalars['Int'];
  maxPoints: Scalars['Int'];
};

export type ResultsParty = {
  __typename?: 'ResultsParty';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  logoUrl: Scalars['String'];
  country: Country;
  agreementPoints: Scalars['Int'];
  disagreementPoints: Scalars['Int'];
  percentAgreement: Scalars['Int'];
};

export type Survey = {
  __typename?: 'Survey';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  answers: Array<SurveyAnswer>;
  finished: Scalars['Boolean'];
  quizVersion: QuizVersion;
};

export type SurveyAnswer = {
  __typename?: 'SurveyAnswer';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  question: Question;
  type: SurveyAnswerType;
  weight: Scalars['Float'];
};

export type SurveyAnswerInput = {
  question: Scalars['String'];
  type: SurveyAnswerType;
  weight: Scalars['Float'];
};

export enum SurveyAnswerType {
  Neutral = 'NEUTRAL',
  Agree = 'AGREE',
  Disagree = 'DISAGREE'
}

export type TextTranslation = {
  __typename?: 'TextTranslation';
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type TextTranslationInput = {
  pl?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type UpdateIdeologyInput = {
  name: TextTranslationInput;
  description: TextTranslationInput;
  color: Scalars['String'];
  icon: IdeologyIconInput;
};

export type UpdatePartyInput = {
  name: Scalars['String'];
  logoUrl: Scalars['String'];
  country: Country;
};

export type UpdateQuestionInput = {
  text: TextTranslationInput;
  effects: QuestionEffectsInput;
};

export type UpdateQuizInput = {
  title?: Maybe<TextTranslationInput>;
  logoUrl?: Maybe<Scalars['String']>;
  description?: Maybe<TextTranslationInput>;
  currentVersion?: Maybe<Scalars['String']>;
  meta?: Maybe<QuizMetaInput>;
};

export type UpdateQuizVersionInput = {
  publishedOn?: Maybe<Scalars['DateTime']>;
  axes?: Maybe<Array<QuizAxisInput>>;
  parent?: Maybe<Scalars['String']>;
  compassModes: Array<Maybe<QuizCompassModeInput>>;
};

export type UpdateRespondentInput = {
  details: RespondentDetailsInput;
};

export type UpdateSurveyInput = {
  answers: Array<Maybe<SurveyAnswerInput>>;
  finished?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  authorsConnection?: Maybe<AuthorConnection>;
  document?: Maybe<Documents>;
  partner?: Maybe<Partners>;
  politicianResult?: Maybe<PoliticianResults>;
  politicianResults?: Maybe<Array<Maybe<PoliticianResults>>>;
  politicianResultsConnection?: Maybe<PoliticianResultsConnection>;
  politician?: Maybe<Politician>;
  politicians?: Maybe<Array<Maybe<Politician>>>;
  politiciansConnection?: Maybe<PoliticianConnection>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsConnection?: Maybe<PostConnection>;
  talk?: Maybe<Talk>;
  talks?: Maybe<Array<Maybe<Talk>>>;
  talksConnection?: Maybe<TalkConnection>;
  me?: Maybe<UsersPermissionsMe>;
  respondent: Respondent;
  meRespondent: Respondent;
  survey: Survey;
  quiz: Quiz;
  featuredQuizzes: Array<Quiz>;
  quizVersion: QuizVersion;
  results: Results;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAuthorsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAuthorsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDocumentArgs = {
  publicationState?: Maybe<PublicationState>;
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


export type QueryPoliticianArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPoliticiansArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPoliticiansConnectionArgs = {
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


export type QueryRespondentArgs = {
  code: Array<Scalars['String']>;
};


export type QuerySurveyArgs = {
  id: Scalars['String'];
};


export type QueryQuizArgs = {
  slug: Scalars['String'];
};


export type QueryQuizVersionArgs = {
  id: Scalars['String'];
};


export type QueryResultsArgs = {
  surveyId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<CreateAuthorPayload>;
  updateAuthor?: Maybe<UpdateAuthorPayload>;
  deleteAuthor?: Maybe<DeleteAuthorPayload>;
  createPolitician?: Maybe<CreatePoliticianPayload>;
  updatePolitician?: Maybe<UpdatePoliticianPayload>;
  deletePolitician?: Maybe<DeletePoliticianPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  createRespondent: Respondent;
  updateRespondent: Respondent;
  changeCode: Respondent;
  removeMe: Respondent;
  createSurvey: Survey;
  updateSurvey: Survey;
  createQuiz: Quiz;
  updateQuiz: Quiz;
  createIdeology: Ideology;
  updateIdeology: Ideology;
  createQuizVersion: QuizVersion;
  updateQuizVersion: QuizVersion;
  createParty: Party;
  updateParty: Party;
  createQuestion: Question;
  createManyQuestions: Array<Question>;
  updateQuestion: Question;
};


export type MutationCreateAuthorArgs = {
  input?: Maybe<CreateAuthorInput>;
};


export type MutationUpdateAuthorArgs = {
  input?: Maybe<UpdateAuthorInput>;
};


export type MutationDeleteAuthorArgs = {
  input?: Maybe<DeleteAuthorInput>;
};


export type MutationCreatePoliticianArgs = {
  input?: Maybe<CreatePoliticianInput>;
};


export type MutationUpdatePoliticianArgs = {
  input?: Maybe<UpdatePoliticianInput>;
};


export type MutationDeletePoliticianArgs = {
  input?: Maybe<DeletePoliticianInput>;
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


export type MutationCreateRespondentArgs = {
  createRespondentInput: CreateRespondentInput;
};


export type MutationUpdateRespondentArgs = {
  updateRespondentInput: UpdateRespondentInput;
};


export type MutationChangeCodeArgs = {
  code: Array<Scalars['String']>;
};


export type MutationCreateSurveyArgs = {
  createSurveyInput: CreateSurveyInput;
};


export type MutationUpdateSurveyArgs = {
  updateSurveyInput: UpdateSurveyInput;
  id: Scalars['String'];
};


export type MutationCreateQuizArgs = {
  createQuizInput: CreateQuizInput;
};


export type MutationUpdateQuizArgs = {
  updateQuizInput: UpdateQuizInput;
  id: Scalars['String'];
};


export type MutationCreateIdeologyArgs = {
  createIdeologyInput: CreateIdeologyInput;
};


export type MutationUpdateIdeologyArgs = {
  updateIdeologyInput: UpdateIdeologyInput;
  id: Scalars['String'];
};


export type MutationCreateQuizVersionArgs = {
  createQuizVersionInput: CreateQuizVersionInput;
  quizId: Scalars['String'];
};


export type MutationUpdateQuizVersionArgs = {
  updateQuizVersionInput: UpdateQuizVersionInput;
  id: Scalars['String'];
};


export type MutationCreatePartyArgs = {
  createPartyInput: CreatePartyInput;
};


export type MutationUpdatePartyArgs = {
  updatePartyInput: UpdatePartyInput;
  id: Scalars['String'];
};


export type MutationCreateQuestionArgs = {
  createQuestionInput: CreateQuestionInput;
  quizVersion: Scalars['String'];
};


export type MutationCreateManyQuestionsArgs = {
  createManyQuestionsInput: Array<CreateQuestionInput>;
  quizVersion: Scalars['String'];
};


export type MutationUpdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput;
  id: Scalars['String'];
};

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

export type ExtendedPostPartsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'createdAt' | 'updatedAt'>
  & { content?: Maybe<(
    { __typename?: 'ComponentTranslationRichTextTranslation' }
    & Pick<ComponentTranslationRichTextTranslation, 'pl' | 'en'>
  )> }
  & BasicPostPartsFragment
);

export type PostByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostByIdQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & ExtendedPostPartsFragment
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

export type CreateRespondentMutationVariables = Exact<{
  lang: Language;
}>;


export type CreateRespondentMutation = (
  { __typename?: 'Mutation' }
  & { createRespondent: (
    { __typename?: 'Respondent' }
    & Pick<Respondent, 'id' | 'code'>
  ) }
);

export type FeaturedQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedQuizzesQuery = (
  { __typename?: 'Query' }
  & { featuredQuizzes: Array<(
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'slug' | 'logoUrl'>
    & { meta: (
      { __typename?: 'QuizMeta' }
      & { features: (
        { __typename?: 'QuizFeatures' }
        & Pick<QuizFeatures, 'compass' | 'parties' | 'politiciansResults' | 'axesNumber' | 'questionsNumber'>
        & { authorizedParties: Array<Maybe<(
          { __typename?: 'Party' }
          & Pick<Party, 'id'>
        )>> }
      ) }
    ), title: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ) }
  )> }
);

export type MeRespondentQueryVariables = Exact<{ [key: string]: never; }>;


export type MeRespondentQuery = (
  { __typename?: 'Query' }
  & { meRespondent: (
    { __typename?: 'Respondent' }
    & Pick<Respondent, 'id' | 'code'>
  ) }
);

export type MeRespondentSurveysQueryVariables = Exact<{ [key: string]: never; }>;


export type MeRespondentSurveysQuery = (
  { __typename?: 'Query' }
  & { meRespondent: (
    { __typename?: 'Respondent' }
    & Pick<Respondent, 'id'>
    & { surveys: Array<Maybe<(
      { __typename?: 'Survey' }
      & Pick<Survey, 'id' | 'updatedAt' | 'finished'>
      & { quizVersion: (
        { __typename?: 'QuizVersion' }
        & { quiz: (
          { __typename?: 'Quiz' }
          & Pick<Quiz, 'id' | 'logoUrl'>
        ) }
      ) }
    )>> }
  ) }
);

export type SingleQuizQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SingleQuizQuery = (
  { __typename?: 'Query' }
  & { quiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'logoUrl'>
    & { title: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), description: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), currentVersion: (
      { __typename?: 'QuizVersion' }
      & Pick<QuizVersion, 'id'>
    ), meta: (
      { __typename?: 'QuizMeta' }
      & Pick<QuizMeta, 'license'>
      & { features: (
        { __typename?: 'QuizFeatures' }
        & Pick<QuizFeatures, 'compass' | 'parties' | 'politiciansResults' | 'axesNumber' | 'questionsNumber'>
      ), statistics: (
        { __typename?: 'QuizStatistics' }
        & Pick<QuizStatistics, 'surveysNumber'>
      ), author: (
        { __typename?: 'QuizAuthor' }
        & Pick<QuizAuthor, 'url' | 'name'>
      ) }
    ) }
  ) }
);

export type UpdateRespondentMutationVariables = Exact<{
  values: UpdateRespondentInput;
}>;


export type UpdateRespondentMutation = (
  { __typename?: 'Mutation' }
  & { updateRespondent: (
    { __typename?: 'Respondent' }
    & Pick<Respondent, 'id'>
  ) }
);

export type ResultsAxisPartsFragment = (
  { __typename?: 'ResultsAxis' }
  & Pick<ResultsAxis, 'maxPoints'>
  & { left: (
    { __typename?: 'ResultsIdeology' }
    & Pick<ResultsIdeology, 'color' | 'points'>
    & { name: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), description: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), icon: (
      { __typename?: 'IdeologyIcon' }
      & Pick<IdeologyIcon, 'type' | 'value'>
    ) }
  ), right: (
    { __typename?: 'ResultsIdeology' }
    & Pick<ResultsIdeology, 'color' | 'points'>
    & { name: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), description: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), icon: (
      { __typename?: 'IdeologyIcon' }
      & Pick<IdeologyIcon, 'type' | 'value'>
    ) }
  ) }
);

export type ResultsCompassPartsFragment = (
  { __typename?: 'ResultsCompass' }
  & { name: (
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  ), horizontal: (
    { __typename?: 'QuizCompassAxis' }
    & { name?: Maybe<(
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    )> }
  ), vertical: (
    { __typename?: 'QuizCompassAxis' }
    & { name?: Maybe<(
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    )> }
  ), third?: Maybe<(
    { __typename?: 'QuizCompassAxis' }
    & { name?: Maybe<(
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    )> }
  )>, point: (
    { __typename?: 'ResultsCompassPoint' }
    & Pick<ResultsCompassPoint, 'horizontal' | 'vertical' | 'third'>
  ) }
);

export type ResultsPartsFragment = (
  { __typename?: 'Results' }
  & Pick<Results, 'id' | 'createdAt' | 'updatedAt'>
  & { axes: Array<(
    { __typename?: 'ResultsAxis' }
    & ResultsAxisPartsFragment
  )>, parties: Array<(
    { __typename?: 'ResultsParty' }
    & ResultsPartyPartsFragment
  )>, compasses: Array<(
    { __typename?: 'ResultsCompass' }
    & ResultsCompassPartsFragment
  )>, quiz: (
    { __typename?: 'Quiz' }
    & ResultsQuizFragment
  ) }
);

export type ResultsPartyPartsFragment = (
  { __typename?: 'ResultsParty' }
  & Pick<ResultsParty, 'id' | 'name' | 'logoUrl' | 'percentAgreement'>
);

export type ResultsPoliticianPartsFragment = (
  { __typename?: 'Politician' }
  & Pick<Politician, 'id' | 'name'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )>, biography?: Maybe<(
    { __typename?: 'ComponentTranslationLongTextTranslation' }
    & Pick<ComponentTranslationLongTextTranslation, 'pl' | 'en'>
  )> }
);

export type ResultsQuizFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'logoUrl'>
  & { title: (
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  ) }
);

export type SingleResultsQueryVariables = Exact<{
  surveyId: Scalars['String'];
}>;


export type SingleResultsQuery = (
  { __typename?: 'Query' }
  & { results: (
    { __typename?: 'Results' }
    & ResultsPartsFragment
  ), politicianResultsConnection?: Maybe<(
    { __typename?: 'PoliticianResultsConnection' }
    & { values?: Maybe<Array<Maybe<(
      { __typename?: 'PoliticianResults' }
      & { politician?: Maybe<(
        { __typename?: 'Politician' }
        & ResultsPoliticianPartsFragment
      )> }
    )>>> }
  )> }
);

export type BasicSurveyPartsFragment = (
  { __typename?: 'Survey' }
  & { quizVersion: (
    { __typename?: 'QuizVersion' }
    & { questions: Array<Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'id'>
      & { text: (
        { __typename?: 'TextTranslation' }
        & Pick<TextTranslation, 'pl' | 'en'>
      ) }
    )>>, quiz: (
      { __typename?: 'Quiz' }
      & Pick<Quiz, 'logoUrl'>
    ) }
  ), answers: Array<(
    { __typename?: 'SurveyAnswer' }
    & Pick<SurveyAnswer, 'type' | 'weight'>
    & { question: (
      { __typename?: 'Question' }
      & Pick<Question, 'id'>
    ) }
  )> }
);

export type CreateSurveyMutationVariables = Exact<{
  values: CreateSurveyInput;
}>;


export type CreateSurveyMutation = (
  { __typename?: 'Mutation' }
  & { createSurvey: (
    { __typename?: 'Survey' }
    & Pick<Survey, 'id'>
  ) }
);

export type SingleSurveyQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleSurveyQuery = (
  { __typename?: 'Query' }
  & { survey: (
    { __typename?: 'Survey' }
    & BasicSurveyPartsFragment
  ) }
);

export type UpdateSurveyMutationVariables = Exact<{
  values: UpdateSurveyInput;
  id: Scalars['String'];
}>;


export type UpdateSurveyMutation = (
  { __typename?: 'Mutation' }
  & { updateSurvey: (
    { __typename?: 'Survey' }
    & BasicSurveyPartsFragment
  ) }
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

export type GdprDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type GdprDocumentQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'Documents' }
    & { gdpr?: Maybe<(
      { __typename?: 'ComponentTranslationRichTextTranslation' }
      & Pick<ComponentTranslationRichTextTranslation, 'pl' | 'en'>
    )> }
  )> }
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

export type PrivacyDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type PrivacyDocumentQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'Documents' }
    & { privacy?: Maybe<(
      { __typename?: 'ComponentTranslationRichTextTranslation' }
      & Pick<ComponentTranslationRichTextTranslation, 'pl' | 'en'>
    )> }
  )> }
);

export type RulesDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type RulesDocumentQuery = (
  { __typename?: 'Query' }
  & { document?: Maybe<(
    { __typename?: 'Documents' }
    & { rules?: Maybe<(
      { __typename?: 'ComponentTranslationRichTextTranslation' }
      & Pick<ComponentTranslationRichTextTranslation, 'pl' | 'en'>
    )> }
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
export const ExtendedPostPartsFragmentDoc = gql`
    fragment ExtendedPostParts on Post {
  ...BasicPostParts
  content {
    pl
    en
  }
  createdAt
  updatedAt
}
    ${BasicPostPartsFragmentDoc}`;
export const ResultsAxisPartsFragmentDoc = gql`
    fragment ResultsAxisParts on ResultsAxis {
  maxPoints
  left {
    name {
      pl
      en
    }
    description {
      pl
      en
    }
    icon {
      type
      value
    }
    color
    points
  }
  right {
    name {
      pl
      en
    }
    description {
      pl
      en
    }
    icon {
      type
      value
    }
    color
    points
  }
}
    `;
export const ResultsPartyPartsFragmentDoc = gql`
    fragment ResultsPartyParts on ResultsParty {
  id
  name
  logoUrl
  percentAgreement
}
    `;
export const ResultsCompassPartsFragmentDoc = gql`
    fragment ResultsCompassParts on ResultsCompass {
  name {
    pl
    en
  }
  horizontal {
    name {
      pl
      en
    }
  }
  vertical {
    name {
      pl
      en
    }
  }
  third {
    name {
      pl
      en
    }
  }
  point {
    horizontal
    vertical
    third
  }
}
    `;
export const ResultsQuizFragmentDoc = gql`
    fragment ResultsQuiz on Quiz {
  id
  logoUrl
  title {
    pl
    en
  }
}
    `;
export const ResultsPartsFragmentDoc = gql`
    fragment ResultsParts on Results {
  id
  createdAt
  updatedAt
  axes {
    ...ResultsAxisParts
  }
  parties {
    ...ResultsPartyParts
  }
  compasses {
    ...ResultsCompassParts
  }
  quiz {
    ...ResultsQuiz
  }
}
    ${ResultsAxisPartsFragmentDoc}
${ResultsPartyPartsFragmentDoc}
${ResultsCompassPartsFragmentDoc}
${ResultsQuizFragmentDoc}`;
export const ResultsPoliticianPartsFragmentDoc = gql`
    fragment ResultsPoliticianParts on Politician {
  id
  name
  image {
    url
  }
  biography {
    pl
    en
  }
}
    `;
export const BasicSurveyPartsFragmentDoc = gql`
    fragment BasicSurveyParts on Survey {
  quizVersion {
    questions {
      id
      text {
        pl
        en
      }
    }
    quiz {
      logoUrl
    }
  }
  answers {
    type
    weight
    question {
      id
    }
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
export const PostByIdDocument = gql`
    query PostById($id: ID!) {
  post(id: $id) {
    ...ExtendedPostParts
  }
}
    ${ExtendedPostPartsFragmentDoc}`;

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostByIdQuery(baseOptions: Apollo.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
        return Apollo.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, baseOptions);
      }
export function usePostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          return Apollo.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, baseOptions);
        }
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>;
export type PostByIdLazyQueryHookResult = ReturnType<typeof usePostByIdLazyQuery>;
export type PostByIdQueryResult = Apollo.QueryResult<PostByIdQuery, PostByIdQueryVariables>;
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
export const CreateRespondentDocument = gql`
    mutation CreateRespondent($lang: Language!) {
  createRespondent(createRespondentInput: {lang: $lang}) {
    id
    code
  }
}
    `;
export type CreateRespondentMutationFn = Apollo.MutationFunction<CreateRespondentMutation, CreateRespondentMutationVariables>;

/**
 * __useCreateRespondentMutation__
 *
 * To run a mutation, you first call `useCreateRespondentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRespondentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRespondentMutation, { data, loading, error }] = useCreateRespondentMutation({
 *   variables: {
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useCreateRespondentMutation(baseOptions?: Apollo.MutationHookOptions<CreateRespondentMutation, CreateRespondentMutationVariables>) {
        return Apollo.useMutation<CreateRespondentMutation, CreateRespondentMutationVariables>(CreateRespondentDocument, baseOptions);
      }
export type CreateRespondentMutationHookResult = ReturnType<typeof useCreateRespondentMutation>;
export type CreateRespondentMutationResult = Apollo.MutationResult<CreateRespondentMutation>;
export type CreateRespondentMutationOptions = Apollo.BaseMutationOptions<CreateRespondentMutation, CreateRespondentMutationVariables>;
export const FeaturedQuizzesDocument = gql`
    query FeaturedQuizzes {
  featuredQuizzes {
    id
    slug
    logoUrl
    meta {
      features {
        compass
        parties
        politiciansResults
        axesNumber
        questionsNumber
        authorizedParties {
          id
        }
      }
    }
    title {
      pl
      en
    }
  }
}
    `;

/**
 * __useFeaturedQuizzesQuery__
 *
 * To run a query within a React component, call `useFeaturedQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedQuizzesQuery(baseOptions?: Apollo.QueryHookOptions<FeaturedQuizzesQuery, FeaturedQuizzesQueryVariables>) {
        return Apollo.useQuery<FeaturedQuizzesQuery, FeaturedQuizzesQueryVariables>(FeaturedQuizzesDocument, baseOptions);
      }
export function useFeaturedQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedQuizzesQuery, FeaturedQuizzesQueryVariables>) {
          return Apollo.useLazyQuery<FeaturedQuizzesQuery, FeaturedQuizzesQueryVariables>(FeaturedQuizzesDocument, baseOptions);
        }
export type FeaturedQuizzesQueryHookResult = ReturnType<typeof useFeaturedQuizzesQuery>;
export type FeaturedQuizzesLazyQueryHookResult = ReturnType<typeof useFeaturedQuizzesLazyQuery>;
export type FeaturedQuizzesQueryResult = Apollo.QueryResult<FeaturedQuizzesQuery, FeaturedQuizzesQueryVariables>;
export const MeRespondentDocument = gql`
    query MeRespondent {
  meRespondent {
    id
    code
  }
}
    `;

/**
 * __useMeRespondentQuery__
 *
 * To run a query within a React component, call `useMeRespondentQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeRespondentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeRespondentQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeRespondentQuery(baseOptions?: Apollo.QueryHookOptions<MeRespondentQuery, MeRespondentQueryVariables>) {
        return Apollo.useQuery<MeRespondentQuery, MeRespondentQueryVariables>(MeRespondentDocument, baseOptions);
      }
export function useMeRespondentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeRespondentQuery, MeRespondentQueryVariables>) {
          return Apollo.useLazyQuery<MeRespondentQuery, MeRespondentQueryVariables>(MeRespondentDocument, baseOptions);
        }
export type MeRespondentQueryHookResult = ReturnType<typeof useMeRespondentQuery>;
export type MeRespondentLazyQueryHookResult = ReturnType<typeof useMeRespondentLazyQuery>;
export type MeRespondentQueryResult = Apollo.QueryResult<MeRespondentQuery, MeRespondentQueryVariables>;
export const MeRespondentSurveysDocument = gql`
    query MeRespondentSurveys {
  meRespondent {
    id
    surveys {
      id
      updatedAt
      finished
      quizVersion {
        quiz {
          id
          logoUrl
        }
      }
    }
  }
}
    `;

/**
 * __useMeRespondentSurveysQuery__
 *
 * To run a query within a React component, call `useMeRespondentSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeRespondentSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeRespondentSurveysQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeRespondentSurveysQuery(baseOptions?: Apollo.QueryHookOptions<MeRespondentSurveysQuery, MeRespondentSurveysQueryVariables>) {
        return Apollo.useQuery<MeRespondentSurveysQuery, MeRespondentSurveysQueryVariables>(MeRespondentSurveysDocument, baseOptions);
      }
export function useMeRespondentSurveysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeRespondentSurveysQuery, MeRespondentSurveysQueryVariables>) {
          return Apollo.useLazyQuery<MeRespondentSurveysQuery, MeRespondentSurveysQueryVariables>(MeRespondentSurveysDocument, baseOptions);
        }
export type MeRespondentSurveysQueryHookResult = ReturnType<typeof useMeRespondentSurveysQuery>;
export type MeRespondentSurveysLazyQueryHookResult = ReturnType<typeof useMeRespondentSurveysLazyQuery>;
export type MeRespondentSurveysQueryResult = Apollo.QueryResult<MeRespondentSurveysQuery, MeRespondentSurveysQueryVariables>;
export const SingleQuizDocument = gql`
    query SingleQuiz($slug: String!) {
  quiz(slug: $slug) {
    id
    logoUrl
    title {
      pl
      en
    }
    description {
      pl
      en
    }
    currentVersion {
      id
    }
    meta {
      features {
        compass
        parties
        politiciansResults
        axesNumber
        questionsNumber
      }
      statistics {
        surveysNumber
      }
      author {
        url
        name
      }
      license
    }
  }
}
    `;

/**
 * __useSingleQuizQuery__
 *
 * To run a query within a React component, call `useSingleQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleQuizQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useSingleQuizQuery(baseOptions: Apollo.QueryHookOptions<SingleQuizQuery, SingleQuizQueryVariables>) {
        return Apollo.useQuery<SingleQuizQuery, SingleQuizQueryVariables>(SingleQuizDocument, baseOptions);
      }
export function useSingleQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleQuizQuery, SingleQuizQueryVariables>) {
          return Apollo.useLazyQuery<SingleQuizQuery, SingleQuizQueryVariables>(SingleQuizDocument, baseOptions);
        }
export type SingleQuizQueryHookResult = ReturnType<typeof useSingleQuizQuery>;
export type SingleQuizLazyQueryHookResult = ReturnType<typeof useSingleQuizLazyQuery>;
export type SingleQuizQueryResult = Apollo.QueryResult<SingleQuizQuery, SingleQuizQueryVariables>;
export const UpdateRespondentDocument = gql`
    mutation UpdateRespondent($values: UpdateRespondentInput!) {
  updateRespondent(updateRespondentInput: $values) {
    id
  }
}
    `;
export type UpdateRespondentMutationFn = Apollo.MutationFunction<UpdateRespondentMutation, UpdateRespondentMutationVariables>;

/**
 * __useUpdateRespondentMutation__
 *
 * To run a mutation, you first call `useUpdateRespondentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRespondentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRespondentMutation, { data, loading, error }] = useUpdateRespondentMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateRespondentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRespondentMutation, UpdateRespondentMutationVariables>) {
        return Apollo.useMutation<UpdateRespondentMutation, UpdateRespondentMutationVariables>(UpdateRespondentDocument, baseOptions);
      }
export type UpdateRespondentMutationHookResult = ReturnType<typeof useUpdateRespondentMutation>;
export type UpdateRespondentMutationResult = Apollo.MutationResult<UpdateRespondentMutation>;
export type UpdateRespondentMutationOptions = Apollo.BaseMutationOptions<UpdateRespondentMutation, UpdateRespondentMutationVariables>;
export const SingleResultsDocument = gql`
    query SingleResults($surveyId: String!) {
  results(surveyId: $surveyId) {
    ...ResultsParts
  }
  politicianResultsConnection(where: {rid: $surveyId}) {
    values {
      politician {
        ...ResultsPoliticianParts
      }
    }
  }
}
    ${ResultsPartsFragmentDoc}
${ResultsPoliticianPartsFragmentDoc}`;

/**
 * __useSingleResultsQuery__
 *
 * To run a query within a React component, call `useSingleResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleResultsQuery({
 *   variables: {
 *      surveyId: // value for 'surveyId'
 *   },
 * });
 */
export function useSingleResultsQuery(baseOptions: Apollo.QueryHookOptions<SingleResultsQuery, SingleResultsQueryVariables>) {
        return Apollo.useQuery<SingleResultsQuery, SingleResultsQueryVariables>(SingleResultsDocument, baseOptions);
      }
export function useSingleResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleResultsQuery, SingleResultsQueryVariables>) {
          return Apollo.useLazyQuery<SingleResultsQuery, SingleResultsQueryVariables>(SingleResultsDocument, baseOptions);
        }
export type SingleResultsQueryHookResult = ReturnType<typeof useSingleResultsQuery>;
export type SingleResultsLazyQueryHookResult = ReturnType<typeof useSingleResultsLazyQuery>;
export type SingleResultsQueryResult = Apollo.QueryResult<SingleResultsQuery, SingleResultsQueryVariables>;
export const CreateSurveyDocument = gql`
    mutation CreateSurvey($values: CreateSurveyInput!) {
  createSurvey(createSurveyInput: $values) {
    id
  }
}
    `;
export type CreateSurveyMutationFn = Apollo.MutationFunction<CreateSurveyMutation, CreateSurveyMutationVariables>;

/**
 * __useCreateSurveyMutation__
 *
 * To run a mutation, you first call `useCreateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyMutation, { data, loading, error }] = useCreateSurveyMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyMutation, CreateSurveyMutationVariables>) {
        return Apollo.useMutation<CreateSurveyMutation, CreateSurveyMutationVariables>(CreateSurveyDocument, baseOptions);
      }
export type CreateSurveyMutationHookResult = ReturnType<typeof useCreateSurveyMutation>;
export type CreateSurveyMutationResult = Apollo.MutationResult<CreateSurveyMutation>;
export type CreateSurveyMutationOptions = Apollo.BaseMutationOptions<CreateSurveyMutation, CreateSurveyMutationVariables>;
export const SingleSurveyDocument = gql`
    query SingleSurvey($id: String!) {
  survey(id: $id) {
    ...BasicSurveyParts
  }
}
    ${BasicSurveyPartsFragmentDoc}`;

/**
 * __useSingleSurveyQuery__
 *
 * To run a query within a React component, call `useSingleSurveyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSurveyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSurveyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleSurveyQuery(baseOptions: Apollo.QueryHookOptions<SingleSurveyQuery, SingleSurveyQueryVariables>) {
        return Apollo.useQuery<SingleSurveyQuery, SingleSurveyQueryVariables>(SingleSurveyDocument, baseOptions);
      }
export function useSingleSurveyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleSurveyQuery, SingleSurveyQueryVariables>) {
          return Apollo.useLazyQuery<SingleSurveyQuery, SingleSurveyQueryVariables>(SingleSurveyDocument, baseOptions);
        }
export type SingleSurveyQueryHookResult = ReturnType<typeof useSingleSurveyQuery>;
export type SingleSurveyLazyQueryHookResult = ReturnType<typeof useSingleSurveyLazyQuery>;
export type SingleSurveyQueryResult = Apollo.QueryResult<SingleSurveyQuery, SingleSurveyQueryVariables>;
export const UpdateSurveyDocument = gql`
    mutation UpdateSurvey($values: UpdateSurveyInput!, $id: String!) {
  updateSurvey(updateSurveyInput: $values, id: $id) {
    ...BasicSurveyParts
  }
}
    ${BasicSurveyPartsFragmentDoc}`;
export type UpdateSurveyMutationFn = Apollo.MutationFunction<UpdateSurveyMutation, UpdateSurveyMutationVariables>;

/**
 * __useUpdateSurveyMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyMutation, { data, loading, error }] = useUpdateSurveyMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyMutation, UpdateSurveyMutationVariables>) {
        return Apollo.useMutation<UpdateSurveyMutation, UpdateSurveyMutationVariables>(UpdateSurveyDocument, baseOptions);
      }
export type UpdateSurveyMutationHookResult = ReturnType<typeof useUpdateSurveyMutation>;
export type UpdateSurveyMutationResult = Apollo.MutationResult<UpdateSurveyMutation>;
export type UpdateSurveyMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyMutation, UpdateSurveyMutationVariables>;
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
export const GdprDocumentDocument = gql`
    query GdprDocument {
  document {
    gdpr {
      pl
      en
    }
  }
}
    `;

/**
 * __useGdprDocumentQuery__
 *
 * To run a query within a React component, call `useGdprDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGdprDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGdprDocumentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGdprDocumentQuery(baseOptions?: Apollo.QueryHookOptions<GdprDocumentQuery, GdprDocumentQueryVariables>) {
        return Apollo.useQuery<GdprDocumentQuery, GdprDocumentQueryVariables>(GdprDocumentDocument, baseOptions);
      }
export function useGdprDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GdprDocumentQuery, GdprDocumentQueryVariables>) {
          return Apollo.useLazyQuery<GdprDocumentQuery, GdprDocumentQueryVariables>(GdprDocumentDocument, baseOptions);
        }
export type GdprDocumentQueryHookResult = ReturnType<typeof useGdprDocumentQuery>;
export type GdprDocumentLazyQueryHookResult = ReturnType<typeof useGdprDocumentLazyQuery>;
export type GdprDocumentQueryResult = Apollo.QueryResult<GdprDocumentQuery, GdprDocumentQueryVariables>;
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
export const PrivacyDocumentDocument = gql`
    query PrivacyDocument {
  document {
    privacy {
      pl
      en
    }
  }
}
    `;

/**
 * __usePrivacyDocumentQuery__
 *
 * To run a query within a React component, call `usePrivacyDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrivacyDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrivacyDocumentQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrivacyDocumentQuery(baseOptions?: Apollo.QueryHookOptions<PrivacyDocumentQuery, PrivacyDocumentQueryVariables>) {
        return Apollo.useQuery<PrivacyDocumentQuery, PrivacyDocumentQueryVariables>(PrivacyDocumentDocument, baseOptions);
      }
export function usePrivacyDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrivacyDocumentQuery, PrivacyDocumentQueryVariables>) {
          return Apollo.useLazyQuery<PrivacyDocumentQuery, PrivacyDocumentQueryVariables>(PrivacyDocumentDocument, baseOptions);
        }
export type PrivacyDocumentQueryHookResult = ReturnType<typeof usePrivacyDocumentQuery>;
export type PrivacyDocumentLazyQueryHookResult = ReturnType<typeof usePrivacyDocumentLazyQuery>;
export type PrivacyDocumentQueryResult = Apollo.QueryResult<PrivacyDocumentQuery, PrivacyDocumentQueryVariables>;
export const RulesDocumentDocument = gql`
    query RulesDocument {
  document {
    rules {
      pl
      en
    }
  }
}
    `;

/**
 * __useRulesDocumentQuery__
 *
 * To run a query within a React component, call `useRulesDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useRulesDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRulesDocumentQuery({
 *   variables: {
 *   },
 * });
 */
export function useRulesDocumentQuery(baseOptions?: Apollo.QueryHookOptions<RulesDocumentQuery, RulesDocumentQueryVariables>) {
        return Apollo.useQuery<RulesDocumentQuery, RulesDocumentQueryVariables>(RulesDocumentDocument, baseOptions);
      }
export function useRulesDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RulesDocumentQuery, RulesDocumentQueryVariables>) {
          return Apollo.useLazyQuery<RulesDocumentQuery, RulesDocumentQueryVariables>(RulesDocumentDocument, baseOptions);
        }
export type RulesDocumentQueryHookResult = ReturnType<typeof useRulesDocumentQuery>;
export type RulesDocumentLazyQueryHookResult = ReturnType<typeof useRulesDocumentLazyQuery>;
export type RulesDocumentQueryResult = Apollo.QueryResult<RulesDocumentQuery, RulesDocumentQueryVariables>;