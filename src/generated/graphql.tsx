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

export type ComponentCommonDepartment = {
  __typename?: 'ComponentCommonDepartment';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
  leaders?: Maybe<Array<Maybe<Member>>>;
  members?: Maybe<Array<Maybe<Member>>>;
};


export type ComponentCommonDepartmentLeadersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ComponentCommonDepartmentMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentCommonDepartmentInput = {
  title?: Maybe<Scalars['String']>;
  leaders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  logo?: Maybe<Scalars['ID']>;
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

export type ComponentPersonMember = {
  __typename?: 'ComponentPersonMember';
  id: Scalars['ID'];
  _id: Scalars['ID'];
};

export type ComponentPersonMemberInput = {
  _?: Maybe<Scalars['String']>;
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

export type CreateMemberInput = {
  data?: Maybe<MemberInput>;
};

export type CreateMemberPayload = {
  __typename?: 'createMemberPayload';
  member?: Maybe<Member>;
};

export type CreateOrganisationInput = {
  data?: Maybe<OrganisationInput>;
};

export type CreateOrganisationPayload = {
  __typename?: 'createOrganisationPayload';
  organisation?: Maybe<Organisation>;
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

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};



export type DeleteDocumentPayload = {
  __typename?: 'deleteDocumentPayload';
  document?: Maybe<Documents>;
};

export type DeleteMemberInput = {
  where?: Maybe<InputId>;
};

export type DeleteMemberPayload = {
  __typename?: 'deleteMemberPayload';
  member?: Maybe<Member>;
};

export type DeleteOrganisationInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrganisationPayload = {
  __typename?: 'deleteOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type DeletePartnerPayload = {
  __typename?: 'deletePartnerPayload';
  partner?: Maybe<Partners>;
};

export type DeletePatreonPayload = {
  __typename?: 'deletePatreonPayload';
  patreon?: Maybe<Patreons>;
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

export type DeleteTeamPayload = {
  __typename?: 'deleteTeamPayload';
  team?: Maybe<Team>;
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

export type EditComponentCommonDepartmentInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  leaders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  logo?: Maybe<Scalars['ID']>;
};

export type EditComponentCommonSocialInput = {
  id?: Maybe<Scalars['ID']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type EditComponentPersonMemberInput = {
  id?: Maybe<Scalars['ID']>;
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

export type EditMemberInput = {
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrganisationInput = {
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  talks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  politicians?: Maybe<Array<Maybe<Scalars['ID']>>>;
  shortname?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPartnerInput = {
  partners?: Maybe<Array<Maybe<EditComponentPersonPartnerInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPatreonInput = {
  list?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPoliticianInput = {
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<EditComponentTranslationLongTextTranslationInput>;
  name?: Maybe<Scalars['String']>;
  politician_results?: Maybe<Array<Maybe<Scalars['ID']>>>;
  talks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organisation?: Maybe<Scalars['ID']>;
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
  moderators?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organisations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  streamyard_id?: Maybe<Scalars['String']>;
  fb_post_id?: Maybe<Scalars['String']>;
  tt_post_id?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTeamInput = {
  departments?: Maybe<Array<Maybe<EditComponentCommonDepartmentInput>>>;
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
  Interview = 'interview',
  Expert = 'expert',
  Ring = 'ring'
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};



export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
};

export type MemberAggregator = {
  __typename?: 'MemberAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  values?: Maybe<Array<Maybe<Member>>>;
  groupBy?: Maybe<MemberGroupBy>;
  aggregate?: Maybe<MemberAggregator>;
};

export type MemberConnection_Id = {
  __typename?: 'MemberConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionCreatedAt = {
  __typename?: 'MemberConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionId = {
  __typename?: 'MemberConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionImage = {
  __typename?: 'MemberConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionName = {
  __typename?: 'MemberConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionRole = {
  __typename?: 'MemberConnectionRole';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberConnectionUpdatedAt = {
  __typename?: 'MemberConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MemberConnection>;
};

export type MemberGroupBy = {
  __typename?: 'MemberGroupBy';
  id?: Maybe<Array<Maybe<MemberConnectionId>>>;
  _id?: Maybe<Array<Maybe<MemberConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MemberConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MemberConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<MemberConnectionName>>>;
  role?: Maybe<Array<Maybe<MemberConnectionRole>>>;
  image?: Maybe<Array<Maybe<MemberConnectionImage>>>;
};

export type MemberInput = {
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Documents | UpdateDocumentPayload | DeleteDocumentPayload | Member | MemberConnection | MemberAggregator | MemberGroupBy | MemberConnectionId | MemberConnection_Id | MemberConnectionCreatedAt | MemberConnectionUpdatedAt | MemberConnectionName | MemberConnectionRole | MemberConnectionImage | CreateMemberPayload | UpdateMemberPayload | DeleteMemberPayload | Organisation | OrganisationConnection | OrganisationAggregator | OrganisationGroupBy | OrganisationConnectionId | OrganisationConnection_Id | OrganisationConnectionCreatedAt | OrganisationConnectionUpdatedAt | OrganisationConnectionName | OrganisationConnectionLogo | OrganisationConnectionShortname | OrganisationConnectionPublished_At | CreateOrganisationPayload | UpdateOrganisationPayload | DeleteOrganisationPayload | Partners | UpdatePartnerPayload | DeletePartnerPayload | Patreons | UpdatePatreonPayload | DeletePatreonPayload | PoliticianResults | PoliticianResultsConnection | PoliticianResultsAggregator | PoliticianResultsGroupBy | PoliticianResultsConnectionId | PoliticianResultsConnection_Id | PoliticianResultsConnectionCreatedAt | PoliticianResultsConnectionUpdatedAt | PoliticianResultsConnectionRid | PoliticianResultsConnectionCategory | PoliticianResultsConnectionFeatured | PoliticianResultsConnectionSlug | PoliticianResultsConnectionPolitician | PoliticianResultsConnectionQuiz_Slug | CreatePoliticianResultPayload | UpdatePoliticianResultPayload | DeletePoliticianResultPayload | Politician | PoliticianConnection | PoliticianAggregator | PoliticianGroupBy | PoliticianConnectionId | PoliticianConnection_Id | PoliticianConnectionCreatedAt | PoliticianConnectionUpdatedAt | PoliticianConnectionImage | PoliticianConnectionBiography | PoliticianConnectionName | PoliticianConnectionOrganisation | CreatePoliticianPayload | UpdatePoliticianPayload | DeletePoliticianPayload | Post | PostConnection | PostAggregator | PostGroupBy | PostConnectionId | PostConnection_Id | PostConnectionCreatedAt | PostConnectionUpdatedAt | PostConnectionThumbnail | PostConnectionCategory | PostConnectionFeatured | PostConnectionTitle | PostConnectionContent | PostConnectionSubcategory | PostConnectionSlug | PostConnectionDefault_Title | PostConnectionPublished_At | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Talk | TalkConnection | TalkAggregator | TalkGroupBy | TalkConnectionId | TalkConnection_Id | TalkConnectionCreatedAt | TalkConnectionUpdatedAt | TalkConnectionTitle | TalkConnectionStart | TalkConnectionEnd | TalkConnectionType | TalkConnectionUrl | TalkConnectionThumbnail | TalkConnectionLang | TalkConnectionFb_Post_Id | TalkConnectionTt_Post_Id | TalkConnectionPublished_At | CreateTalkPayload | UpdateTalkPayload | DeleteTalkPayload | Team | UpdateTeamPayload | DeleteTeamPayload | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | CreateUserPayload | UpdateUserPayload | ComponentCommonDepartment | ComponentCommonSocials | ComponentPersonMember | ComponentPersonPartner | ComponentPersonPolitician | ComponentTranslationLongTextTranslation | ComponentTranslationRichTextTranslation | ComponentTranslationShortTextTranslation;

export type Organisation = {
  __typename?: 'Organisation';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
  shortname?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  talks?: Maybe<Array<Maybe<Talk>>>;
  politicians?: Maybe<Array<Maybe<Politician>>>;
};


export type OrganisationTalksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type OrganisationPoliticiansArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type OrganisationAggregator = {
  __typename?: 'OrganisationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrganisationConnection = {
  __typename?: 'OrganisationConnection';
  values?: Maybe<Array<Maybe<Organisation>>>;
  groupBy?: Maybe<OrganisationGroupBy>;
  aggregate?: Maybe<OrganisationAggregator>;
};

export type OrganisationConnection_Id = {
  __typename?: 'OrganisationConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionCreatedAt = {
  __typename?: 'OrganisationConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionId = {
  __typename?: 'OrganisationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionLogo = {
  __typename?: 'OrganisationConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionName = {
  __typename?: 'OrganisationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionPublished_At = {
  __typename?: 'OrganisationConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionShortname = {
  __typename?: 'OrganisationConnectionShortname';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionUpdatedAt = {
  __typename?: 'OrganisationConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationGroupBy = {
  __typename?: 'OrganisationGroupBy';
  id?: Maybe<Array<Maybe<OrganisationConnectionId>>>;
  _id?: Maybe<Array<Maybe<OrganisationConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<OrganisationConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<OrganisationConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<OrganisationConnectionName>>>;
  logo?: Maybe<Array<Maybe<OrganisationConnectionLogo>>>;
  shortname?: Maybe<Array<Maybe<OrganisationConnectionShortname>>>;
  published_at?: Maybe<Array<Maybe<OrganisationConnectionPublished_At>>>;
};

export type OrganisationInput = {
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  talks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  politicians?: Maybe<Array<Maybe<Scalars['ID']>>>;
  shortname?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

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

export type PatreonInput = {
  list?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Patreons = {
  __typename?: 'Patreons';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  list?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
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
  organisation?: Maybe<Organisation>;
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

export type PoliticianConnectionOrganisation = {
  __typename?: 'PoliticianConnectionOrganisation';
  key?: Maybe<Scalars['ID']>;
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
  organisation?: Maybe<Array<Maybe<PoliticianConnectionOrganisation>>>;
};

export type PoliticianInput = {
  image?: Maybe<Scalars['ID']>;
  biography?: Maybe<ComponentTranslationLongTextTranslationInput>;
  name?: Maybe<Scalars['String']>;
  politician_results?: Maybe<Array<Maybe<Scalars['ID']>>>;
  talks?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organisation?: Maybe<Scalars['ID']>;
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
  fb_post_id?: Maybe<Scalars['String']>;
  tt_post_id?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  politicians?: Maybe<Array<Maybe<Politician>>>;
  moderators?: Maybe<Array<Maybe<Member>>>;
  organisations?: Maybe<Array<Maybe<Organisation>>>;
};


export type TalkPoliticiansArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TalkModeratorsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TalkOrganisationsArgs = {
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

export type TalkConnectionFb_Post_Id = {
  __typename?: 'TalkConnectionFb_post_id';
  key?: Maybe<Scalars['String']>;
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

export type TalkConnectionTt_Post_Id = {
  __typename?: 'TalkConnectionTt_post_id';
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
  fb_post_id?: Maybe<Array<Maybe<TalkConnectionFb_Post_Id>>>;
  tt_post_id?: Maybe<Array<Maybe<TalkConnectionTt_Post_Id>>>;
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
  moderators?: Maybe<Array<Maybe<Scalars['ID']>>>;
  organisations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  streamyard_id?: Maybe<Scalars['String']>;
  fb_post_id?: Maybe<Scalars['String']>;
  tt_post_id?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  departments?: Maybe<Array<Maybe<ComponentCommonDepartment>>>;
};

export type TeamInput = {
  departments?: Maybe<Array<Maybe<ComponentCommonDepartmentInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UpdateDocumentInput = {
  data?: Maybe<EditDocumentInput>;
};

export type UpdateDocumentPayload = {
  __typename?: 'updateDocumentPayload';
  document?: Maybe<Documents>;
};

export type UpdateMemberInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMemberInput>;
};

export type UpdateMemberPayload = {
  __typename?: 'updateMemberPayload';
  member?: Maybe<Member>;
};

export type UpdateOrganisationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrganisationInput>;
};

export type UpdateOrganisationPayload = {
  __typename?: 'updateOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type UpdatePartnerInput = {
  data?: Maybe<EditPartnerInput>;
};

export type UpdatePartnerPayload = {
  __typename?: 'updatePartnerPayload';
  partner?: Maybe<Partners>;
};

export type UpdatePatreonInput = {
  data?: Maybe<EditPatreonInput>;
};

export type UpdatePatreonPayload = {
  __typename?: 'updatePatreonPayload';
  patreon?: Maybe<Patreons>;
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

export type UpdateTeamInput = {
  data?: Maybe<EditTeamInput>;
};

export type UpdateTeamPayload = {
  __typename?: 'updateTeamPayload';
  team?: Maybe<Team>;
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

export type AddPartyAnswersInput = {
  questionText: TextTranslationInput;
  answer: SurveyAnswerType;
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
  logoUrl: Scalars['String'];
  title: TextTranslationInput;
  description: TextTranslationInput;
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

export type CreateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  recaptcha: Scalars['String'];
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
  authors: Array<User>;
  viewerCanEdit: Scalars['Boolean'];
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
  authors: Array<User>;
  viewerCanEdit: Scalars['Boolean'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  text: TextTranslation;
  effects: QuestionEffects;
  authors: Array<User>;
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
  type: QuizType;
  title: TextTranslation;
  description: TextTranslation;
  meta: QuizMeta;
  verifyRequest?: Maybe<QuizVerifyRequest>;
  currentVersion: QuizVersion;
  lastUpdatedVersion: QuizVersion;
  versions: Array<Maybe<QuizVersion>>;
};

export type QuizAxis = {
  __typename?: 'QuizAxis';
  id: Scalars['String'];
  name?: Maybe<TextTranslation>;
  left?: Maybe<Ideology>;
  right?: Maybe<Ideology>;
};

export type QuizAxisInput = {
  name?: Maybe<TextTranslationInput>;
  left?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
};

export type QuizCompassAxis = {
  __typename?: 'QuizCompassAxis';
  name?: Maybe<TextTranslation>;
  leftIdeologies: Array<QuizCompassIdeology>;
  rightIdeologies: Array<QuizCompassIdeology>;
};

export type QuizCompassAxisInput = {
  name?: Maybe<TextTranslationInput>;
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
  name?: Maybe<TextTranslation>;
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
  traits: Scalars['Boolean'];
  axesNumber: Scalars['Int'];
  questionsNumber: Scalars['Int'];
  parties: Scalars['Boolean'];
  politiciansResults: Scalars['Boolean'];
  authorizedParties: Array<Maybe<Party>>;
};

export enum QuizLicense {
  Commercial = 'COMMERCIAL',
  Mit = 'MIT'
}

export type QuizMeta = {
  __typename?: 'QuizMeta';
  features: QuizFeatures;
  statistics: QuizStatistics;
  votes: QuizVotes;
  authors: Array<User>;
  license: QuizLicense;
};

export type QuizStatistics = {
  __typename?: 'QuizStatistics';
  surveysNumber: Scalars['Int'];
};

export enum QuizType {
  Official = 'OFFICIAL',
  Community = 'COMMUNITY',
  Classic = 'CLASSIC'
}

export enum QuizVerificationState {
  Idle = 'IDLE',
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED'
}

export type QuizVerifyRequest = {
  __typename?: 'QuizVerifyRequest';
  version: QuizVersion;
  moderator?: Maybe<User>;
  reason?: Maybe<Scalars['String']>;
  state: QuizVerificationState;
};

export type QuizVersion = {
  __typename?: 'QuizVersion';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  publishedOn?: Maybe<Scalars['DateTime']>;
  verifiedOn?: Maybe<Scalars['DateTime']>;
  axes: Array<Maybe<QuizAxis>>;
  parent?: Maybe<QuizVersion>;
  questions: Array<Maybe<Question>>;
  compassModes: Array<Maybe<QuizCompassMode>>;
  traits: Array<Maybe<Ideology>>;
  ideologies: Array<Maybe<Ideology>>;
  parties: Array<Maybe<Party>>;
  quiz: Quiz;
};

export type QuizVotes = {
  __typename?: 'QuizVotes';
  voters: Array<User>;
  value: Scalars['Int'];
};

export enum QuizVoteType {
  For = 'FOR',
  Against = 'AGAINST'
}

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
  traits: Array<Ideology>;
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
  name?: Maybe<TextTranslation>;
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
  authors: Array<User>;
  viewerCanEdit: Scalars['Boolean'];
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
  authors: Array<User>;
  viewerCanEdit: Scalars['Boolean'];
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
};

export type UpdateQuizVersionInput = {
  publishedOn?: Maybe<Scalars['DateTime']>;
  axes?: Maybe<Array<QuizAxisInput>>;
  parent?: Maybe<Scalars['String']>;
  compassModes: Array<Maybe<QuizCompassModeInput>>;
  traits: Array<Maybe<Scalars['String']>>;
  questions: Array<Maybe<Scalars['String']>>;
  ideologies: Array<Maybe<Scalars['String']>>;
  parties: Array<Maybe<Scalars['String']>>;
};

export type UpdateRespondentInput = {
  details: RespondentDetailsInput;
};

export type UpdateSurveyInput = {
  answers: Array<Maybe<SurveyAnswerInput>>;
  finished?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  name: Scalars['String'];
  role: UserRole;
};

export enum UserRole {
  Regular = 'REGULAR',
  Admin = 'ADMIN',
  Moderator = 'MODERATOR'
}

export type VerifyQuizInput = {
  state: QuizVerificationState;
  reason: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  document?: Maybe<Documents>;
  member?: Maybe<Member>;
  members?: Maybe<Array<Maybe<Member>>>;
  membersConnection?: Maybe<MemberConnection>;
  organisation?: Maybe<Organisation>;
  organisations?: Maybe<Array<Maybe<Organisation>>>;
  organisationsConnection?: Maybe<OrganisationConnection>;
  partner?: Maybe<Partners>;
  patreon?: Maybe<Patreons>;
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
  team?: Maybe<Team>;
  respondent: Respondent;
  meRespondent: Respondent;
  verifyAdmin: Scalars['Boolean'];
  survey: Survey;
  quiz: Quiz;
  featuredQuizzes: Array<Quiz>;
  currentUserQuizzes: Array<Quiz>;
  verifyQueueQuizzes: Array<Quiz>;
  quizVersion: QuizVersion;
  me: User;
  results: Results;
};


export type QueryDocumentArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryMemberArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMembersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrganisationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryOrganisationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPartnerArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPatreonArgs = {
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


export type QueryTeamArgs = {
  publicationState?: Maybe<PublicationState>;
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
  createMember?: Maybe<CreateMemberPayload>;
  updateMember?: Maybe<UpdateMemberPayload>;
  deleteMember?: Maybe<DeleteMemberPayload>;
  createOrganisation?: Maybe<CreateOrganisationPayload>;
  updateOrganisation?: Maybe<UpdateOrganisationPayload>;
  deleteOrganisation?: Maybe<DeleteOrganisationPayload>;
  updatePatreon?: Maybe<UpdatePatreonPayload>;
  deletePatreon?: Maybe<DeletePatreonPayload>;
  createPolitician?: Maybe<CreatePoliticianPayload>;
  updatePolitician?: Maybe<UpdatePoliticianPayload>;
  deletePolitician?: Maybe<DeletePoliticianPayload>;
  updateTeam?: Maybe<UpdateTeamPayload>;
  deleteTeam?: Maybe<DeleteTeamPayload>;
  createRespondent: Respondent;
  updateRespondent: Respondent;
  changeCode: Respondent;
  removeMe: Respondent;
  createSurvey: Survey;
  updateSurvey: Survey;
  deleteSurvey: Scalars['Boolean'];
  createQuiz: Quiz;
  updateQuiz: Quiz;
  requestQuizVerify: Scalars['Boolean'];
  verifyQuiz: Scalars['Boolean'];
  voteQuiz: Scalars['Boolean'];
  createQuizVersion: QuizVersion;
  saveQuizVersion: QuizVersion;
  updateQuizVersion: QuizVersion;
  createUser: User;
  createIdeology: Ideology;
  updateIdeology: Ideology;
  createParty: Party;
  updateParty: Party;
  createQuestion: Question;
  createManyQuestions: Array<Question>;
  updateQuestion: Question;
  addPartyAnswers: Scalars['Boolean'];
};


export type MutationCreateMemberArgs = {
  input?: Maybe<CreateMemberInput>;
};


export type MutationUpdateMemberArgs = {
  input?: Maybe<UpdateMemberInput>;
};


export type MutationDeleteMemberArgs = {
  input?: Maybe<DeleteMemberInput>;
};


export type MutationCreateOrganisationArgs = {
  input?: Maybe<CreateOrganisationInput>;
};


export type MutationUpdateOrganisationArgs = {
  input?: Maybe<UpdateOrganisationInput>;
};


export type MutationDeleteOrganisationArgs = {
  input?: Maybe<DeleteOrganisationInput>;
};


export type MutationUpdatePatreonArgs = {
  input?: Maybe<UpdatePatreonInput>;
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


export type MutationUpdateTeamArgs = {
  input?: Maybe<UpdateTeamInput>;
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


export type MutationDeleteSurveyArgs = {
  id: Scalars['String'];
};


export type MutationCreateQuizArgs = {
  createQuizInput: CreateQuizInput;
};


export type MutationUpdateQuizArgs = {
  updateQuizInput: UpdateQuizInput;
  id: Scalars['String'];
};


export type MutationRequestQuizVerifyArgs = {
  recaptcha: Scalars['String'];
  quizVersion: Scalars['String'];
};


export type MutationVerifyQuizArgs = {
  verifyQuizInput: VerifyQuizInput;
  quizVersion: Scalars['String'];
};


export type MutationVoteQuizArgs = {
  type: QuizVoteType;
  id: Scalars['String'];
};


export type MutationCreateQuizVersionArgs = {
  createQuizVersionInput: CreateQuizVersionInput;
  quizId: Scalars['String'];
};


export type MutationSaveQuizVersionArgs = {
  saveQuizVersionInput: UpdateQuizVersionInput;
  publish: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationUpdateQuizVersionArgs = {
  updateQuizVersionInput: UpdateQuizVersionInput;
  id: Scalars['String'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateIdeologyArgs = {
  createIdeologyInput: CreateIdeologyInput;
};


export type MutationUpdateIdeologyArgs = {
  updateIdeologyInput: UpdateIdeologyInput;
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
};


export type MutationCreateManyQuestionsArgs = {
  createManyQuestionsInput: Array<CreateQuestionInput>;
  quizVersion: Scalars['String'];
};


export type MutationUpdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput;
  id: Scalars['String'];
};


export type MutationAddPartyAnswersArgs = {
  addPartyAnswersInput: Array<AddPartyAnswersInput>;
  quizVersionId: Scalars['String'];
  partyId: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  values: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type CompassAxisPartsFragment = (
  { __typename?: 'QuizCompassAxis' }
  & { leftIdeologies: Array<(
    { __typename?: 'QuizCompassIdeology' }
    & Pick<QuizCompassIdeology, 'weight'>
    & { ideology: (
      { __typename?: 'Ideology' }
      & Pick<Ideology, 'id'>
    ) }
  )>, rightIdeologies: Array<(
    { __typename?: 'QuizCompassIdeology' }
    & Pick<QuizCompassIdeology, 'weight'>
    & { ideology: (
      { __typename?: 'Ideology' }
      & Pick<Ideology, 'id'>
    ) }
  )>, name?: Maybe<(
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  )> }
);

export type CreateIdeologyMutationVariables = Exact<{
  values: CreateIdeologyInput;
}>;


export type CreateIdeologyMutation = (
  { __typename?: 'Mutation' }
  & { createIdeology: (
    { __typename?: 'Ideology' }
    & EditorIdeologyPartsFragment
  ) }
);

export type CreatePartyMutationVariables = Exact<{
  values: CreatePartyInput;
}>;


export type CreatePartyMutation = (
  { __typename?: 'Mutation' }
  & { createParty: (
    { __typename?: 'Party' }
    & EditorPartyPartsFragment
  ) }
);

export type CreateQuestionMutationVariables = Exact<{
  values: CreateQuestionInput;
}>;


export type CreateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { createQuestion: (
    { __typename?: 'Question' }
    & EditorQuestionPartsFragment
  ) }
);

export type CreateQuizMutationVariables = Exact<{
  values: CreateQuizInput;
}>;


export type CreateQuizMutation = (
  { __typename?: 'Mutation' }
  & { createQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'slug'>
  ) }
);

export type EditorAxisPartsFragment = (
  { __typename?: 'QuizAxis' }
  & Pick<QuizAxis, 'id'>
  & { left?: Maybe<(
    { __typename?: 'Ideology' }
    & Pick<Ideology, 'id'>
  )>, right?: Maybe<(
    { __typename?: 'Ideology' }
    & Pick<Ideology, 'id'>
  )> }
);

export type EditorIdeologyPartsFragment = (
  { __typename?: 'Ideology' }
  & Pick<Ideology, 'id' | 'color' | 'viewerCanEdit'>
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
);

export type EditorPartyPartsFragment = (
  { __typename?: 'Party' }
  & Pick<Party, 'id' | 'name' | 'logoUrl' | 'country' | 'viewerCanEdit'>
);

export type EditorQuestionPartsFragment = (
  { __typename?: 'Question' }
  & Pick<Question, 'id'>
  & { text: (
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  ), effects: (
    { __typename?: 'QuestionEffects' }
    & { disagree: (
      { __typename?: 'QuestionPositiveEffect' }
      & { ideologies: Array<Maybe<(
        { __typename?: 'Ideology' }
        & Pick<Ideology, 'id'>
      )>>, parties: Array<Maybe<(
        { __typename?: 'Party' }
        & Pick<Party, 'id'>
      )>> }
    ), agree: (
      { __typename?: 'QuestionPositiveEffect' }
      & { ideologies: Array<Maybe<(
        { __typename?: 'Ideology' }
        & Pick<Ideology, 'id'>
      )>>, parties: Array<Maybe<(
        { __typename?: 'Party' }
        & Pick<Party, 'id'>
      )>> }
    ) }
  ) }
);

export type EditorQuizQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type EditorQuizQuery = (
  { __typename?: 'Query' }
  & { quiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'slug' | 'logoUrl'>
    & { title: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), description: (
      { __typename?: 'TextTranslation' }
      & Pick<TextTranslation, 'pl' | 'en'>
    ), lastUpdatedVersion: (
      { __typename?: 'QuizVersion' }
      & Pick<QuizVersion, 'id' | 'publishedOn'>
      & { questions: Array<Maybe<(
        { __typename?: 'Question' }
        & EditorQuestionPartsFragment
      )>>, axes: Array<Maybe<(
        { __typename?: 'QuizAxis' }
        & EditorAxisPartsFragment
      )>>, compassModes: Array<Maybe<(
        { __typename?: 'QuizCompassMode' }
        & { name?: Maybe<(
          { __typename?: 'TextTranslation' }
          & Pick<TextTranslation, 'pl' | 'en'>
        )>, horizontal: (
          { __typename?: 'QuizCompassAxis' }
          & CompassAxisPartsFragment
        ), vertical: (
          { __typename?: 'QuizCompassAxis' }
          & CompassAxisPartsFragment
        ), third?: Maybe<(
          { __typename?: 'QuizCompassAxis' }
          & CompassAxisPartsFragment
        )> }
      )>>, traits: Array<Maybe<(
        { __typename?: 'Ideology' }
        & EditorIdeologyPartsFragment
      )>>, ideologies: Array<Maybe<(
        { __typename?: 'Ideology' }
        & EditorIdeologyPartsFragment
      )>>, parties: Array<Maybe<(
        { __typename?: 'Party' }
        & EditorPartyPartsFragment
      )>> }
    ) }
  ) }
);

export type RequestQuizVerifyMutationVariables = Exact<{
  quizVersion: Scalars['String'];
  recaptcha: Scalars['String'];
}>;


export type RequestQuizVerifyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestQuizVerify'>
);

export type SaveQuizVersionMutationVariables = Exact<{
  values: UpdateQuizVersionInput;
  id: Scalars['String'];
  publish: Scalars['Boolean'];
}>;


export type SaveQuizVersionMutation = (
  { __typename?: 'Mutation' }
  & { saveQuizVersion: (
    { __typename?: 'QuizVersion' }
    & Pick<QuizVersion, 'id' | 'publishedOn'>
  ) }
);

export type UpdateIdeologyMutationVariables = Exact<{
  values: UpdateIdeologyInput;
  id: Scalars['String'];
}>;


export type UpdateIdeologyMutation = (
  { __typename?: 'Mutation' }
  & { updateIdeology: (
    { __typename?: 'Ideology' }
    & EditorIdeologyPartsFragment
  ) }
);

export type UpdatePartyMutationVariables = Exact<{
  values: UpdatePartyInput;
  id: Scalars['String'];
}>;


export type UpdatePartyMutation = (
  { __typename?: 'Mutation' }
  & { updateParty: (
    { __typename?: 'Party' }
    & EditorPartyPartsFragment
  ) }
);

export type UpdateQuestionMutationVariables = Exact<{
  values: UpdateQuestionInput;
  id: Scalars['String'];
}>;


export type UpdateQuestionMutation = (
  { __typename?: 'Mutation' }
  & { updateQuestion: (
    { __typename?: 'Question' }
    & EditorQuestionPartsFragment
  ) }
);

export type UpdateQuizMutationVariables = Exact<{
  values: UpdateQuizInput;
  id: Scalars['String'];
}>;


export type UpdateQuizMutation = (
  { __typename?: 'Mutation' }
  & { updateQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id'>
  ) }
);

export type UpdateQuizVersionMutationVariables = Exact<{
  values: UpdateQuizVersionInput;
  id: Scalars['String'];
}>;


export type UpdateQuizVersionMutation = (
  { __typename?: 'Mutation' }
  & { updateQuizVersion: (
    { __typename?: 'QuizVersion' }
    & Pick<QuizVersion, 'id'>
    & { axes: Array<Maybe<(
      { __typename?: 'QuizAxis' }
      & EditorAxisPartsFragment
    )>> }
  ) }
);

export type VerifyAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type VerifyAdminQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'verifyAdmin'>
);

export type VerifyQueueQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type VerifyQueueQuizzesQuery = (
  { __typename?: 'Query' }
  & { verifyQueueQuizzes: Array<(
    { __typename?: 'Quiz' }
    & QuizBasicPartsFragment
  )> }
);

export type VerifyQuizMutationVariables = Exact<{
  values: VerifyQuizInput;
  quizVersion: Scalars['String'];
}>;


export type VerifyQuizMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'verifyQuiz'>
);

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

export type ChangeCodeMutationVariables = Exact<{
  code: Array<Scalars['String']> | Scalars['String'];
}>;


export type ChangeCodeMutation = (
  { __typename?: 'Mutation' }
  & { changeCode: (
    { __typename?: 'Respondent' }
    & Pick<Respondent, 'id'>
  ) }
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

export type CurrentUserQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuizzesQuery = (
  { __typename?: 'Query' }
  & { currentUserQuizzes: Array<(
    { __typename?: 'Quiz' }
    & QuizBasicPartsFragment
  )> }
);

export type FeaturedQuizzesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedQuizzesQuery = (
  { __typename?: 'Query' }
  & { featuredQuizzes: Array<(
    { __typename?: 'Quiz' }
    & QuizBasicPartsFragment
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
          & Pick<Quiz, 'id' | 'logoUrl' | 'slug'>
        ) }
      ) }
    )>> }
  ) }
);

export type QuizBasicPartsFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'slug' | 'logoUrl' | 'type'>
  & { verifyRequest?: Maybe<(
    { __typename?: 'QuizVerifyRequest' }
    & Pick<QuizVerifyRequest, 'state' | 'reason'>
    & { version: (
      { __typename?: 'QuizVersion' }
      & Pick<QuizVersion, 'id'>
    ) }
  )>, meta: (
    { __typename?: 'QuizMeta' }
    & { features: (
      { __typename?: 'QuizFeatures' }
      & Pick<QuizFeatures, 'compass' | 'parties' | 'politiciansResults' | 'axesNumber' | 'questionsNumber' | 'traits'>
      & { authorizedParties: Array<Maybe<(
        { __typename?: 'Party' }
        & Pick<Party, 'id'>
      )>> }
    ), votes: (
      { __typename?: 'QuizVotes' }
      & Pick<QuizVotes, 'value'>
    ) }
  ), title: (
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  ) }
);

export type SingleQuizQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SingleQuizQuery = (
  { __typename?: 'Query' }
  & { quiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'logoUrl' | 'type' | 'slug'>
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
      ), authors: Array<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )>, votes: (
        { __typename?: 'QuizVotes' }
        & Pick<QuizVotes, 'value'>
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

export type PoliticiansResultsQueryVariables = Exact<{
  quizSlug?: Maybe<Scalars['String']>;
  category?: Maybe<Enum_Politicianresults_Category>;
}>;


export type PoliticiansResultsQuery = (
  { __typename?: 'Query' }
  & { politicianResultsConnection?: Maybe<(
    { __typename?: 'PoliticianResultsConnection' }
    & { values?: Maybe<Array<Maybe<(
      { __typename?: 'PoliticianResults' }
      & Pick<PoliticianResults, 'rid'>
      & { politician?: Maybe<(
        { __typename?: 'Politician' }
        & Pick<Politician, 'name'>
        & { image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )> }
    )>>> }
  )> }
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
  & { name?: Maybe<(
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  )>, horizontal: (
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
  ), traits: Array<(
    { __typename?: 'Ideology' }
    & ResultsTraitPartsFragment
  )> }
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
  & Pick<Quiz, 'id' | 'logoUrl' | 'type' | 'slug'>
  & { title: (
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  ), description: (
    { __typename?: 'TextTranslation' }
    & Pick<TextTranslation, 'pl' | 'en'>
  ), meta: (
    { __typename?: 'QuizMeta' }
    & { features: (
      { __typename?: 'QuizFeatures' }
      & { authorizedParties: Array<Maybe<(
        { __typename?: 'Party' }
        & Pick<Party, 'id'>
      )>> }
    ) }
  ) }
);

export type ResultsTraitPartsFragment = (
  { __typename?: 'Ideology' }
  & Pick<Ideology, 'id' | 'color'>
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
      & Pick<Quiz, 'logoUrl' | 'type' | 'slug'>
      & { title: (
        { __typename?: 'TextTranslation' }
        & Pick<TextTranslation, 'pl' | 'en'>
      ) }
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

export type DeleteSurveyMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSurveyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteSurvey'>
);

export type SingleSurveyExtendedQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleSurveyExtendedQuery = (
  { __typename?: 'Query' }
  & { survey: (
    { __typename?: 'Survey' }
    & { answers: Array<(
      { __typename?: 'SurveyAnswer' }
      & Pick<SurveyAnswer, 'id' | 'weight' | 'type'>
      & { question: (
        { __typename?: 'Question' }
        & { text: (
          { __typename?: 'TextTranslation' }
          & Pick<TextTranslation, 'pl' | 'en'>
        ), effects: (
          { __typename?: 'QuestionEffects' }
          & { agree: (
            { __typename?: 'QuestionPositiveEffect' }
            & { parties: Array<Maybe<(
              { __typename?: 'Party' }
              & Pick<Party, 'id' | 'name' | 'logoUrl'>
            )>>, ideologies: Array<Maybe<(
              { __typename?: 'Ideology' }
              & Pick<Ideology, 'color'>
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
            )>> }
          ), disagree: (
            { __typename?: 'QuestionPositiveEffect' }
            & { parties: Array<Maybe<(
              { __typename?: 'Party' }
              & Pick<Party, 'id' | 'name' | 'logoUrl'>
            )>>, ideologies: Array<Maybe<(
              { __typename?: 'Ideology' }
              & Pick<Ideology, 'color'>
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
            )>> }
          ) }
        ) }
      ) }
    )> }
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

export type CurrentTalkQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type CurrentTalkQuery = (
  { __typename?: 'Query' }
  & { talksConnection?: Maybe<(
    { __typename?: 'TalkConnection' }
    & { values?: Maybe<Array<Maybe<(
      { __typename?: 'Talk' }
      & Pick<Talk, 'id' | 'published_at' | 'title' | 'url' | 'type' | 'lang'>
    )>>>, aggregate?: Maybe<(
      { __typename?: 'TalkAggregator' }
      & Pick<TalkAggregator, 'count'>
    )> }
  )> }
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

export type DepartmentPartsFragment = (
  { __typename?: 'ComponentCommonDepartment' }
  & Pick<ComponentCommonDepartment, 'id' | 'title'>
  & { logo?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )>, leaders?: Maybe<Array<Maybe<(
    { __typename?: 'Member' }
    & MemberPartsFragment
  )>>>, members?: Maybe<Array<Maybe<(
    { __typename?: 'Member' }
    & MemberPartsFragment
  )>>> }
);

export type MemberPartsFragment = (
  { __typename?: 'Member' }
  & Pick<Member, 'id' | 'name' | 'role'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'formats'>
  )> }
);

export type TeamQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & { departments?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentCommonDepartment' }
      & DepartmentPartsFragment
    )>>> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'role'>
  ) }
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
    & Pick<Partners, '_id'>
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

export type PatreonQueryVariables = Exact<{ [key: string]: never; }>;


export type PatreonQuery = (
  { __typename?: 'Query' }
  & { patreon?: Maybe<(
    { __typename?: 'Patreons' }
    & Pick<Patreons, 'updatedAt' | 'list'>
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

export const CompassAxisPartsFragmentDoc = gql`
    fragment CompassAxisParts on QuizCompassAxis {
  leftIdeologies {
    ideology {
      id
    }
    weight
  }
  rightIdeologies {
    ideology {
      id
    }
    weight
  }
  name {
    pl
    en
  }
}
    `;
export const EditorAxisPartsFragmentDoc = gql`
    fragment EditorAxisParts on QuizAxis {
  id
  left {
    id
  }
  right {
    id
  }
}
    `;
export const EditorIdeologyPartsFragmentDoc = gql`
    fragment EditorIdeologyParts on Ideology {
  id
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
  viewerCanEdit
}
    `;
export const EditorPartyPartsFragmentDoc = gql`
    fragment EditorPartyParts on Party {
  id
  name
  logoUrl
  country
  viewerCanEdit
}
    `;
export const EditorQuestionPartsFragmentDoc = gql`
    fragment EditorQuestionParts on Question {
  id
  text {
    pl
    en
  }
  effects {
    disagree {
      ideologies {
        id
      }
      parties {
        id
      }
    }
    agree {
      ideologies {
        id
      }
      parties {
        id
      }
    }
  }
}
    `;
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
export const QuizBasicPartsFragmentDoc = gql`
    fragment QuizBasicParts on Quiz {
  id
  slug
  logoUrl
  type
  verifyRequest {
    state
    reason
    version {
      id
    }
  }
  meta {
    features {
      compass
      parties
      politiciansResults
      axesNumber
      questionsNumber
      traits
      authorizedParties {
        id
      }
    }
    votes {
      value
    }
  }
  title {
    pl
    en
  }
}
    `;
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
  type
  slug
  title {
    pl
    en
  }
  description {
    pl
    en
  }
  meta {
    features {
      authorizedParties {
        id
      }
    }
  }
}
    `;
export const ResultsTraitPartsFragmentDoc = gql`
    fragment ResultsTraitParts on Ideology {
  id
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
  traits {
    ...ResultsTraitParts
  }
}
    ${ResultsAxisPartsFragmentDoc}
${ResultsPartyPartsFragmentDoc}
${ResultsCompassPartsFragmentDoc}
${ResultsQuizFragmentDoc}
${ResultsTraitPartsFragmentDoc}`;
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
      type
      slug
      title {
        pl
        en
      }
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
export const MemberPartsFragmentDoc = gql`
    fragment MemberParts on Member {
  id
  name
  role
  image {
    formats
  }
}
    `;
export const DepartmentPartsFragmentDoc = gql`
    fragment DepartmentParts on ComponentCommonDepartment {
  id
  title
  logo {
    url
  }
  leaders {
    ...MemberParts
  }
  members {
    ...MemberParts
  }
}
    ${MemberPartsFragmentDoc}`;
export const CreateUserDocument = gql`
    mutation CreateUser($values: CreateUserInput!) {
  createUser(createUserInput: $values) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateIdeologyDocument = gql`
    mutation CreateIdeology($values: CreateIdeologyInput!) {
  createIdeology(createIdeologyInput: $values) {
    ...EditorIdeologyParts
  }
}
    ${EditorIdeologyPartsFragmentDoc}`;
export type CreateIdeologyMutationFn = Apollo.MutationFunction<CreateIdeologyMutation, CreateIdeologyMutationVariables>;

/**
 * __useCreateIdeologyMutation__
 *
 * To run a mutation, you first call `useCreateIdeologyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIdeologyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIdeologyMutation, { data, loading, error }] = useCreateIdeologyMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateIdeologyMutation(baseOptions?: Apollo.MutationHookOptions<CreateIdeologyMutation, CreateIdeologyMutationVariables>) {
        return Apollo.useMutation<CreateIdeologyMutation, CreateIdeologyMutationVariables>(CreateIdeologyDocument, baseOptions);
      }
export type CreateIdeologyMutationHookResult = ReturnType<typeof useCreateIdeologyMutation>;
export type CreateIdeologyMutationResult = Apollo.MutationResult<CreateIdeologyMutation>;
export type CreateIdeologyMutationOptions = Apollo.BaseMutationOptions<CreateIdeologyMutation, CreateIdeologyMutationVariables>;
export const CreatePartyDocument = gql`
    mutation CreateParty($values: CreatePartyInput!) {
  createParty(createPartyInput: $values) {
    ...EditorPartyParts
  }
}
    ${EditorPartyPartsFragmentDoc}`;
export type CreatePartyMutationFn = Apollo.MutationFunction<CreatePartyMutation, CreatePartyMutationVariables>;

/**
 * __useCreatePartyMutation__
 *
 * To run a mutation, you first call `useCreatePartyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePartyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPartyMutation, { data, loading, error }] = useCreatePartyMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreatePartyMutation(baseOptions?: Apollo.MutationHookOptions<CreatePartyMutation, CreatePartyMutationVariables>) {
        return Apollo.useMutation<CreatePartyMutation, CreatePartyMutationVariables>(CreatePartyDocument, baseOptions);
      }
export type CreatePartyMutationHookResult = ReturnType<typeof useCreatePartyMutation>;
export type CreatePartyMutationResult = Apollo.MutationResult<CreatePartyMutation>;
export type CreatePartyMutationOptions = Apollo.BaseMutationOptions<CreatePartyMutation, CreatePartyMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($values: CreateQuestionInput!) {
  createQuestion(createQuestionInput: $values) {
    ...EditorQuestionParts
  }
}
    ${EditorQuestionPartsFragmentDoc}`;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, baseOptions);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($values: CreateQuizInput!) {
  createQuiz(createQuizInput: $values) {
    id
    slug
  }
}
    `;
export type CreateQuizMutationFn = Apollo.MutationFunction<CreateQuizMutation, CreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, baseOptions);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const EditorQuizDocument = gql`
    query EditorQuiz($slug: String!) {
  quiz(slug: $slug) {
    id
    slug
    title {
      pl
      en
    }
    description {
      pl
      en
    }
    logoUrl
    lastUpdatedVersion {
      id
      publishedOn
      questions {
        ...EditorQuestionParts
      }
      axes {
        ...EditorAxisParts
      }
      compassModes {
        name {
          pl
          en
        }
        horizontal {
          ...CompassAxisParts
        }
        vertical {
          ...CompassAxisParts
        }
        third {
          ...CompassAxisParts
        }
      }
      traits {
        ...EditorIdeologyParts
      }
      ideologies {
        ...EditorIdeologyParts
      }
      parties {
        ...EditorPartyParts
      }
    }
  }
}
    ${EditorQuestionPartsFragmentDoc}
${EditorAxisPartsFragmentDoc}
${CompassAxisPartsFragmentDoc}
${EditorIdeologyPartsFragmentDoc}
${EditorPartyPartsFragmentDoc}`;

/**
 * __useEditorQuizQuery__
 *
 * To run a query within a React component, call `useEditorQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditorQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditorQuizQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEditorQuizQuery(baseOptions: Apollo.QueryHookOptions<EditorQuizQuery, EditorQuizQueryVariables>) {
        return Apollo.useQuery<EditorQuizQuery, EditorQuizQueryVariables>(EditorQuizDocument, baseOptions);
      }
export function useEditorQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditorQuizQuery, EditorQuizQueryVariables>) {
          return Apollo.useLazyQuery<EditorQuizQuery, EditorQuizQueryVariables>(EditorQuizDocument, baseOptions);
        }
export type EditorQuizQueryHookResult = ReturnType<typeof useEditorQuizQuery>;
export type EditorQuizLazyQueryHookResult = ReturnType<typeof useEditorQuizLazyQuery>;
export type EditorQuizQueryResult = Apollo.QueryResult<EditorQuizQuery, EditorQuizQueryVariables>;
export const RequestQuizVerifyDocument = gql`
    mutation RequestQuizVerify($quizVersion: String!, $recaptcha: String!) {
  requestQuizVerify(quizVersion: $quizVersion, recaptcha: $recaptcha)
}
    `;
export type RequestQuizVerifyMutationFn = Apollo.MutationFunction<RequestQuizVerifyMutation, RequestQuizVerifyMutationVariables>;

/**
 * __useRequestQuizVerifyMutation__
 *
 * To run a mutation, you first call `useRequestQuizVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestQuizVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestQuizVerifyMutation, { data, loading, error }] = useRequestQuizVerifyMutation({
 *   variables: {
 *      quizVersion: // value for 'quizVersion'
 *      recaptcha: // value for 'recaptcha'
 *   },
 * });
 */
export function useRequestQuizVerifyMutation(baseOptions?: Apollo.MutationHookOptions<RequestQuizVerifyMutation, RequestQuizVerifyMutationVariables>) {
        return Apollo.useMutation<RequestQuizVerifyMutation, RequestQuizVerifyMutationVariables>(RequestQuizVerifyDocument, baseOptions);
      }
export type RequestQuizVerifyMutationHookResult = ReturnType<typeof useRequestQuizVerifyMutation>;
export type RequestQuizVerifyMutationResult = Apollo.MutationResult<RequestQuizVerifyMutation>;
export type RequestQuizVerifyMutationOptions = Apollo.BaseMutationOptions<RequestQuizVerifyMutation, RequestQuizVerifyMutationVariables>;
export const SaveQuizVersionDocument = gql`
    mutation SaveQuizVersion($values: UpdateQuizVersionInput!, $id: String!, $publish: Boolean!) {
  saveQuizVersion(saveQuizVersionInput: $values, id: $id, publish: $publish) {
    id
    publishedOn
  }
}
    `;
export type SaveQuizVersionMutationFn = Apollo.MutationFunction<SaveQuizVersionMutation, SaveQuizVersionMutationVariables>;

/**
 * __useSaveQuizVersionMutation__
 *
 * To run a mutation, you first call `useSaveQuizVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveQuizVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveQuizVersionMutation, { data, loading, error }] = useSaveQuizVersionMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *      publish: // value for 'publish'
 *   },
 * });
 */
export function useSaveQuizVersionMutation(baseOptions?: Apollo.MutationHookOptions<SaveQuizVersionMutation, SaveQuizVersionMutationVariables>) {
        return Apollo.useMutation<SaveQuizVersionMutation, SaveQuizVersionMutationVariables>(SaveQuizVersionDocument, baseOptions);
      }
export type SaveQuizVersionMutationHookResult = ReturnType<typeof useSaveQuizVersionMutation>;
export type SaveQuizVersionMutationResult = Apollo.MutationResult<SaveQuizVersionMutation>;
export type SaveQuizVersionMutationOptions = Apollo.BaseMutationOptions<SaveQuizVersionMutation, SaveQuizVersionMutationVariables>;
export const UpdateIdeologyDocument = gql`
    mutation UpdateIdeology($values: UpdateIdeologyInput!, $id: String!) {
  updateIdeology(updateIdeologyInput: $values, id: $id) {
    ...EditorIdeologyParts
  }
}
    ${EditorIdeologyPartsFragmentDoc}`;
export type UpdateIdeologyMutationFn = Apollo.MutationFunction<UpdateIdeologyMutation, UpdateIdeologyMutationVariables>;

/**
 * __useUpdateIdeologyMutation__
 *
 * To run a mutation, you first call `useUpdateIdeologyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIdeologyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIdeologyMutation, { data, loading, error }] = useUpdateIdeologyMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateIdeologyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIdeologyMutation, UpdateIdeologyMutationVariables>) {
        return Apollo.useMutation<UpdateIdeologyMutation, UpdateIdeologyMutationVariables>(UpdateIdeologyDocument, baseOptions);
      }
export type UpdateIdeologyMutationHookResult = ReturnType<typeof useUpdateIdeologyMutation>;
export type UpdateIdeologyMutationResult = Apollo.MutationResult<UpdateIdeologyMutation>;
export type UpdateIdeologyMutationOptions = Apollo.BaseMutationOptions<UpdateIdeologyMutation, UpdateIdeologyMutationVariables>;
export const UpdatePartyDocument = gql`
    mutation UpdateParty($values: UpdatePartyInput!, $id: String!) {
  updateParty(updatePartyInput: $values, id: $id) {
    ...EditorPartyParts
  }
}
    ${EditorPartyPartsFragmentDoc}`;
export type UpdatePartyMutationFn = Apollo.MutationFunction<UpdatePartyMutation, UpdatePartyMutationVariables>;

/**
 * __useUpdatePartyMutation__
 *
 * To run a mutation, you first call `useUpdatePartyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePartyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePartyMutation, { data, loading, error }] = useUpdatePartyMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePartyMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePartyMutation, UpdatePartyMutationVariables>) {
        return Apollo.useMutation<UpdatePartyMutation, UpdatePartyMutationVariables>(UpdatePartyDocument, baseOptions);
      }
export type UpdatePartyMutationHookResult = ReturnType<typeof useUpdatePartyMutation>;
export type UpdatePartyMutationResult = Apollo.MutationResult<UpdatePartyMutation>;
export type UpdatePartyMutationOptions = Apollo.BaseMutationOptions<UpdatePartyMutation, UpdatePartyMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($values: UpdateQuestionInput!, $id: String!) {
  updateQuestion(updateQuestionInput: $values, id: $id) {
    ...EditorQuestionParts
  }
}
    ${EditorQuestionPartsFragmentDoc}`;
export type UpdateQuestionMutationFn = Apollo.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        return Apollo.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, baseOptions);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = Apollo.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const UpdateQuizDocument = gql`
    mutation UpdateQuiz($values: UpdateQuizInput!, $id: String!) {
  updateQuiz(updateQuizInput: $values, id: $id) {
    id
  }
}
    `;
export type UpdateQuizMutationFn = Apollo.MutationFunction<UpdateQuizMutation, UpdateQuizMutationVariables>;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateQuizMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizMutation, UpdateQuizMutationVariables>) {
        return Apollo.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(UpdateQuizDocument, baseOptions);
      }
export type UpdateQuizMutationHookResult = ReturnType<typeof useUpdateQuizMutation>;
export type UpdateQuizMutationResult = Apollo.MutationResult<UpdateQuizMutation>;
export type UpdateQuizMutationOptions = Apollo.BaseMutationOptions<UpdateQuizMutation, UpdateQuizMutationVariables>;
export const UpdateQuizVersionDocument = gql`
    mutation UpdateQuizVersion($values: UpdateQuizVersionInput!, $id: String!) {
  updateQuizVersion(updateQuizVersionInput: $values, id: $id) {
    id
    axes {
      ...EditorAxisParts
    }
  }
}
    ${EditorAxisPartsFragmentDoc}`;
export type UpdateQuizVersionMutationFn = Apollo.MutationFunction<UpdateQuizVersionMutation, UpdateQuizVersionMutationVariables>;

/**
 * __useUpdateQuizVersionMutation__
 *
 * To run a mutation, you first call `useUpdateQuizVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizVersionMutation, { data, loading, error }] = useUpdateQuizVersionMutation({
 *   variables: {
 *      values: // value for 'values'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateQuizVersionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizVersionMutation, UpdateQuizVersionMutationVariables>) {
        return Apollo.useMutation<UpdateQuizVersionMutation, UpdateQuizVersionMutationVariables>(UpdateQuizVersionDocument, baseOptions);
      }
export type UpdateQuizVersionMutationHookResult = ReturnType<typeof useUpdateQuizVersionMutation>;
export type UpdateQuizVersionMutationResult = Apollo.MutationResult<UpdateQuizVersionMutation>;
export type UpdateQuizVersionMutationOptions = Apollo.BaseMutationOptions<UpdateQuizVersionMutation, UpdateQuizVersionMutationVariables>;
export const VerifyAdminDocument = gql`
    query VerifyAdmin {
  verifyAdmin
}
    `;

/**
 * __useVerifyAdminQuery__
 *
 * To run a query within a React component, call `useVerifyAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useVerifyAdminQuery(baseOptions?: Apollo.QueryHookOptions<VerifyAdminQuery, VerifyAdminQueryVariables>) {
        return Apollo.useQuery<VerifyAdminQuery, VerifyAdminQueryVariables>(VerifyAdminDocument, baseOptions);
      }
export function useVerifyAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyAdminQuery, VerifyAdminQueryVariables>) {
          return Apollo.useLazyQuery<VerifyAdminQuery, VerifyAdminQueryVariables>(VerifyAdminDocument, baseOptions);
        }
export type VerifyAdminQueryHookResult = ReturnType<typeof useVerifyAdminQuery>;
export type VerifyAdminLazyQueryHookResult = ReturnType<typeof useVerifyAdminLazyQuery>;
export type VerifyAdminQueryResult = Apollo.QueryResult<VerifyAdminQuery, VerifyAdminQueryVariables>;
export const VerifyQueueQuizzesDocument = gql`
    query VerifyQueueQuizzes {
  verifyQueueQuizzes {
    ...QuizBasicParts
  }
}
    ${QuizBasicPartsFragmentDoc}`;

/**
 * __useVerifyQueueQuizzesQuery__
 *
 * To run a query within a React component, call `useVerifyQueueQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyQueueQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyQueueQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVerifyQueueQuizzesQuery(baseOptions?: Apollo.QueryHookOptions<VerifyQueueQuizzesQuery, VerifyQueueQuizzesQueryVariables>) {
        return Apollo.useQuery<VerifyQueueQuizzesQuery, VerifyQueueQuizzesQueryVariables>(VerifyQueueQuizzesDocument, baseOptions);
      }
export function useVerifyQueueQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyQueueQuizzesQuery, VerifyQueueQuizzesQueryVariables>) {
          return Apollo.useLazyQuery<VerifyQueueQuizzesQuery, VerifyQueueQuizzesQueryVariables>(VerifyQueueQuizzesDocument, baseOptions);
        }
export type VerifyQueueQuizzesQueryHookResult = ReturnType<typeof useVerifyQueueQuizzesQuery>;
export type VerifyQueueQuizzesLazyQueryHookResult = ReturnType<typeof useVerifyQueueQuizzesLazyQuery>;
export type VerifyQueueQuizzesQueryResult = Apollo.QueryResult<VerifyQueueQuizzesQuery, VerifyQueueQuizzesQueryVariables>;
export const VerifyQuizDocument = gql`
    mutation VerifyQuiz($values: VerifyQuizInput!, $quizVersion: String!) {
  verifyQuiz(verifyQuizInput: $values, quizVersion: $quizVersion)
}
    `;
export type VerifyQuizMutationFn = Apollo.MutationFunction<VerifyQuizMutation, VerifyQuizMutationVariables>;

/**
 * __useVerifyQuizMutation__
 *
 * To run a mutation, you first call `useVerifyQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyQuizMutation, { data, loading, error }] = useVerifyQuizMutation({
 *   variables: {
 *      values: // value for 'values'
 *      quizVersion: // value for 'quizVersion'
 *   },
 * });
 */
export function useVerifyQuizMutation(baseOptions?: Apollo.MutationHookOptions<VerifyQuizMutation, VerifyQuizMutationVariables>) {
        return Apollo.useMutation<VerifyQuizMutation, VerifyQuizMutationVariables>(VerifyQuizDocument, baseOptions);
      }
export type VerifyQuizMutationHookResult = ReturnType<typeof useVerifyQuizMutation>;
export type VerifyQuizMutationResult = Apollo.MutationResult<VerifyQuizMutation>;
export type VerifyQuizMutationOptions = Apollo.BaseMutationOptions<VerifyQuizMutation, VerifyQuizMutationVariables>;
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
export const ChangeCodeDocument = gql`
    mutation ChangeCode($code: [String!]!) {
  changeCode(code: $code) {
    id
  }
}
    `;
export type ChangeCodeMutationFn = Apollo.MutationFunction<ChangeCodeMutation, ChangeCodeMutationVariables>;

/**
 * __useChangeCodeMutation__
 *
 * To run a mutation, you first call `useChangeCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCodeMutation, { data, loading, error }] = useChangeCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useChangeCodeMutation(baseOptions?: Apollo.MutationHookOptions<ChangeCodeMutation, ChangeCodeMutationVariables>) {
        return Apollo.useMutation<ChangeCodeMutation, ChangeCodeMutationVariables>(ChangeCodeDocument, baseOptions);
      }
export type ChangeCodeMutationHookResult = ReturnType<typeof useChangeCodeMutation>;
export type ChangeCodeMutationResult = Apollo.MutationResult<ChangeCodeMutation>;
export type ChangeCodeMutationOptions = Apollo.BaseMutationOptions<ChangeCodeMutation, ChangeCodeMutationVariables>;
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
export const CurrentUserQuizzesDocument = gql`
    query CurrentUserQuizzes {
  currentUserQuizzes {
    ...QuizBasicParts
  }
}
    ${QuizBasicPartsFragmentDoc}`;

/**
 * __useCurrentUserQuizzesQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuizzesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuizzesQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuizzesQuery, CurrentUserQuizzesQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuizzesQuery, CurrentUserQuizzesQueryVariables>(CurrentUserQuizzesDocument, baseOptions);
      }
export function useCurrentUserQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuizzesQuery, CurrentUserQuizzesQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuizzesQuery, CurrentUserQuizzesQueryVariables>(CurrentUserQuizzesDocument, baseOptions);
        }
export type CurrentUserQuizzesQueryHookResult = ReturnType<typeof useCurrentUserQuizzesQuery>;
export type CurrentUserQuizzesLazyQueryHookResult = ReturnType<typeof useCurrentUserQuizzesLazyQuery>;
export type CurrentUserQuizzesQueryResult = Apollo.QueryResult<CurrentUserQuizzesQuery, CurrentUserQuizzesQueryVariables>;
export const FeaturedQuizzesDocument = gql`
    query FeaturedQuizzes {
  featuredQuizzes {
    ...QuizBasicParts
  }
}
    ${QuizBasicPartsFragmentDoc}`;

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
          slug
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
    type
    slug
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
      authors {
        id
        name
      }
      votes {
        value
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
export const PoliticiansResultsDocument = gql`
    query PoliticiansResults($quizSlug: String, $category: ENUM_POLITICIANRESULTS_CATEGORY) {
  politicianResultsConnection(
    sort: "featured:desc"
    where: {quiz_slug: $quizSlug, category: $category}
  ) {
    values {
      rid
      politician {
        name
        image {
          url
        }
      }
    }
  }
}
    `;

/**
 * __usePoliticiansResultsQuery__
 *
 * To run a query within a React component, call `usePoliticiansResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoliticiansResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoliticiansResultsQuery({
 *   variables: {
 *      quizSlug: // value for 'quizSlug'
 *      category: // value for 'category'
 *   },
 * });
 */
export function usePoliticiansResultsQuery(baseOptions?: Apollo.QueryHookOptions<PoliticiansResultsQuery, PoliticiansResultsQueryVariables>) {
        return Apollo.useQuery<PoliticiansResultsQuery, PoliticiansResultsQueryVariables>(PoliticiansResultsDocument, baseOptions);
      }
export function usePoliticiansResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoliticiansResultsQuery, PoliticiansResultsQueryVariables>) {
          return Apollo.useLazyQuery<PoliticiansResultsQuery, PoliticiansResultsQueryVariables>(PoliticiansResultsDocument, baseOptions);
        }
export type PoliticiansResultsQueryHookResult = ReturnType<typeof usePoliticiansResultsQuery>;
export type PoliticiansResultsLazyQueryHookResult = ReturnType<typeof usePoliticiansResultsLazyQuery>;
export type PoliticiansResultsQueryResult = Apollo.QueryResult<PoliticiansResultsQuery, PoliticiansResultsQueryVariables>;
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
export const DeleteSurveyDocument = gql`
    mutation DeleteSurvey($id: String!) {
  deleteSurvey(id: $id)
}
    `;
export type DeleteSurveyMutationFn = Apollo.MutationFunction<DeleteSurveyMutation, DeleteSurveyMutationVariables>;

/**
 * __useDeleteSurveyMutation__
 *
 * To run a mutation, you first call `useDeleteSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSurveyMutation, { data, loading, error }] = useDeleteSurveyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSurveyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSurveyMutation, DeleteSurveyMutationVariables>) {
        return Apollo.useMutation<DeleteSurveyMutation, DeleteSurveyMutationVariables>(DeleteSurveyDocument, baseOptions);
      }
export type DeleteSurveyMutationHookResult = ReturnType<typeof useDeleteSurveyMutation>;
export type DeleteSurveyMutationResult = Apollo.MutationResult<DeleteSurveyMutation>;
export type DeleteSurveyMutationOptions = Apollo.BaseMutationOptions<DeleteSurveyMutation, DeleteSurveyMutationVariables>;
export const SingleSurveyExtendedDocument = gql`
    query SingleSurveyExtended($id: String!) {
  survey(id: $id) {
    answers {
      id
      weight
      type
      question {
        text {
          pl
          en
        }
        effects {
          agree {
            parties {
              id
              name
              logoUrl
            }
            ideologies {
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
            }
          }
          disagree {
            parties {
              id
              name
              logoUrl
            }
            ideologies {
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
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSingleSurveyExtendedQuery__
 *
 * To run a query within a React component, call `useSingleSurveyExtendedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSurveyExtendedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSurveyExtendedQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleSurveyExtendedQuery(baseOptions: Apollo.QueryHookOptions<SingleSurveyExtendedQuery, SingleSurveyExtendedQueryVariables>) {
        return Apollo.useQuery<SingleSurveyExtendedQuery, SingleSurveyExtendedQueryVariables>(SingleSurveyExtendedDocument, baseOptions);
      }
export function useSingleSurveyExtendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleSurveyExtendedQuery, SingleSurveyExtendedQueryVariables>) {
          return Apollo.useLazyQuery<SingleSurveyExtendedQuery, SingleSurveyExtendedQueryVariables>(SingleSurveyExtendedDocument, baseOptions);
        }
export type SingleSurveyExtendedQueryHookResult = ReturnType<typeof useSingleSurveyExtendedQuery>;
export type SingleSurveyExtendedLazyQueryHookResult = ReturnType<typeof useSingleSurveyExtendedLazyQuery>;
export type SingleSurveyExtendedQueryResult = Apollo.QueryResult<SingleSurveyExtendedQuery, SingleSurveyExtendedQueryVariables>;
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
export const CurrentTalkDocument = gql`
    query CurrentTalk($date: String!) {
  talksConnection(where: {start_lt: $date, end_gt: $date}) {
    values {
      id
      published_at
      title
      url
      type
      lang
    }
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useCurrentTalkQuery__
 *
 * To run a query within a React component, call `useCurrentTalkQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentTalkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentTalkQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCurrentTalkQuery(baseOptions: Apollo.QueryHookOptions<CurrentTalkQuery, CurrentTalkQueryVariables>) {
        return Apollo.useQuery<CurrentTalkQuery, CurrentTalkQueryVariables>(CurrentTalkDocument, baseOptions);
      }
export function useCurrentTalkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentTalkQuery, CurrentTalkQueryVariables>) {
          return Apollo.useLazyQuery<CurrentTalkQuery, CurrentTalkQueryVariables>(CurrentTalkDocument, baseOptions);
        }
export type CurrentTalkQueryHookResult = ReturnType<typeof useCurrentTalkQuery>;
export type CurrentTalkLazyQueryHookResult = ReturnType<typeof useCurrentTalkLazyQuery>;
export type CurrentTalkQueryResult = Apollo.QueryResult<CurrentTalkQuery, CurrentTalkQueryVariables>;
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
export const TeamDocument = gql`
    query Team {
  team {
    departments {
      ...DepartmentParts
    }
  }
}
    ${DepartmentPartsFragmentDoc}`;

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamQuery(baseOptions?: Apollo.QueryHookOptions<TeamQuery, TeamQueryVariables>) {
        return Apollo.useQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
      }
export function useTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamQuery, TeamQueryVariables>) {
          return Apollo.useLazyQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = Apollo.QueryResult<TeamQuery, TeamQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  me {
    id
    name
    role
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
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
    _id
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
export const PatreonDocument = gql`
    query Patreon {
  patreon {
    updatedAt
    list
  }
}
    `;

/**
 * __usePatreonQuery__
 *
 * To run a query within a React component, call `usePatreonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatreonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatreonQuery({
 *   variables: {
 *   },
 * });
 */
export function usePatreonQuery(baseOptions?: Apollo.QueryHookOptions<PatreonQuery, PatreonQueryVariables>) {
        return Apollo.useQuery<PatreonQuery, PatreonQueryVariables>(PatreonDocument, baseOptions);
      }
export function usePatreonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PatreonQuery, PatreonQueryVariables>) {
          return Apollo.useLazyQuery<PatreonQuery, PatreonQueryVariables>(PatreonDocument, baseOptions);
        }
export type PatreonQueryHookResult = ReturnType<typeof usePatreonQuery>;
export type PatreonLazyQueryHookResult = ReturnType<typeof usePatreonLazyQuery>;
export type PatreonQueryResult = Apollo.QueryResult<PatreonQuery, PatreonQueryVariables>;
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
