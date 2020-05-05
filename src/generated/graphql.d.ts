export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
  GitHub_URI: any,
  GitHub_DateTime: any,
  GitHub_HTML: any,
  GitHub_GitObjectID: any,
  GitHub_GitTimestamp: any,
  GitHub_GitSSHRemote: any,
  GitHub_Date: any,
  GitHub_PreciseDateTime: any,
  GitHub_X509Certificate: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type FeedRubberDucking = Node & {
   __typename?: 'FeedRubberDucking',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  creator?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  pubDate?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  enclosure?: Maybe<FeedRubberDuckingEnclosure>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<FeedRubberDuckingContent>,
  contentSnippet?: Maybe<Scalars['String']>,
  guid?: Maybe<Scalars['String']>,
  isoDate?: Maybe<Scalars['Date']>,
  itunes?: Maybe<FeedRubberDuckingItunes>,
};


export type FeedRubberDuckingIsoDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FeedRubberDuckingConnection = {
   __typename?: 'FeedRubberDuckingConnection',
  totalCount: Scalars['Int'],
  edges: Array<FeedRubberDuckingEdge>,
  nodes: Array<FeedRubberDucking>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FeedRubberDuckingGroupConnection>,
};


export type FeedRubberDuckingConnectionDistinctArgs = {
  field: FeedRubberDuckingFieldsEnum
};


export type FeedRubberDuckingConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FeedRubberDuckingFieldsEnum
};

export type FeedRubberDuckingContent = {
   __typename?: 'FeedRubberDuckingContent',
  encoded?: Maybe<Scalars['String']>,
};

export type FeedRubberDuckingContentFilterInput = {
  encoded?: Maybe<StringQueryOperatorInput>,
};

export type FeedRubberDuckingEdge = {
   __typename?: 'FeedRubberDuckingEdge',
  next?: Maybe<FeedRubberDucking>,
  node: FeedRubberDucking,
  previous?: Maybe<FeedRubberDucking>,
};

export type FeedRubberDuckingEnclosure = {
   __typename?: 'FeedRubberDuckingEnclosure',
  length?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type FeedRubberDuckingEnclosureFilterInput = {
  length?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export enum FeedRubberDuckingFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Creator = 'creator',
  Title = 'title',
  Link = 'link',
  PubDate = 'pubDate',
  Author = 'author',
  EnclosureLength = 'enclosure___length',
  EnclosureType = 'enclosure___type',
  EnclosureUrl = 'enclosure___url',
  Description = 'description',
  ContentEncoded = 'content___encoded',
  ContentSnippet = 'contentSnippet',
  Guid = 'guid',
  IsoDate = 'isoDate',
  ItunesAuthor = 'itunes___author',
  ItunesSubtitle = 'itunes___subtitle',
  ItunesSummary = 'itunes___summary',
  ItunesExplicit = 'itunes___explicit',
  ItunesDuration = 'itunes___duration',
  ItunesEpisode = 'itunes___episode',
  ItunesKeywords = 'itunes___keywords',
  ItunesImage = 'itunes___image'
}

export type FeedRubberDuckingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  creator?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  pubDate?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  enclosure?: Maybe<FeedRubberDuckingEnclosureFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<FeedRubberDuckingContentFilterInput>,
  contentSnippet?: Maybe<StringQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  isoDate?: Maybe<DateQueryOperatorInput>,
  itunes?: Maybe<FeedRubberDuckingItunesFilterInput>,
};

export type FeedRubberDuckingGroupConnection = {
   __typename?: 'FeedRubberDuckingGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FeedRubberDuckingEdge>,
  nodes: Array<FeedRubberDucking>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FeedRubberDuckingItunes = {
   __typename?: 'FeedRubberDuckingItunes',
  author?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  explicit?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['String']>,
  episode?: Maybe<Scalars['String']>,
  keywords?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type FeedRubberDuckingItunesFilterInput = {
  author?: Maybe<StringQueryOperatorInput>,
  subtitle?: Maybe<StringQueryOperatorInput>,
  summary?: Maybe<StringQueryOperatorInput>,
  explicit?: Maybe<StringQueryOperatorInput>,
  duration?: Maybe<StringQueryOperatorInput>,
  episode?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<StringQueryOperatorInput>,
};

export type FeedRubberDuckingSortInput = {
  fields?: Maybe<Array<Maybe<FeedRubberDuckingFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type File = Node & {
   __typename?: 'File',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterFeaturedImageSourceInstanceName = 'childMarkdownRemark___frontmatter___featuredImage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterFeaturedImageAbsolutePath = 'childMarkdownRemark___frontmatter___featuredImage___absolutePath',
  ChildMarkdownRemarkFrontmatterFeaturedImageRelativePath = 'childMarkdownRemark___frontmatter___featuredImage___relativePath',
  ChildMarkdownRemarkFrontmatterFeaturedImageExtension = 'childMarkdownRemark___frontmatter___featuredImage___extension',
  ChildMarkdownRemarkFrontmatterFeaturedImageSize = 'childMarkdownRemark___frontmatter___featuredImage___size',
  ChildMarkdownRemarkFrontmatterFeaturedImagePrettySize = 'childMarkdownRemark___frontmatter___featuredImage___prettySize',
  ChildMarkdownRemarkFrontmatterFeaturedImageModifiedTime = 'childMarkdownRemark___frontmatter___featuredImage___modifiedTime',
  ChildMarkdownRemarkFrontmatterFeaturedImageAccessTime = 'childMarkdownRemark___frontmatter___featuredImage___accessTime',
  ChildMarkdownRemarkFrontmatterFeaturedImageChangeTime = 'childMarkdownRemark___frontmatter___featuredImage___changeTime',
  ChildMarkdownRemarkFrontmatterFeaturedImageBirthTime = 'childMarkdownRemark___frontmatter___featuredImage___birthTime',
  ChildMarkdownRemarkFrontmatterFeaturedImageRoot = 'childMarkdownRemark___frontmatter___featuredImage___root',
  ChildMarkdownRemarkFrontmatterFeaturedImageDir = 'childMarkdownRemark___frontmatter___featuredImage___dir',
  ChildMarkdownRemarkFrontmatterFeaturedImageBase = 'childMarkdownRemark___frontmatter___featuredImage___base',
  ChildMarkdownRemarkFrontmatterFeaturedImageExt = 'childMarkdownRemark___frontmatter___featuredImage___ext',
  ChildMarkdownRemarkFrontmatterFeaturedImageName = 'childMarkdownRemark___frontmatter___featuredImage___name',
  ChildMarkdownRemarkFrontmatterFeaturedImageRelativeDirectory = 'childMarkdownRemark___frontmatter___featuredImage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterFeaturedImageDev = 'childMarkdownRemark___frontmatter___featuredImage___dev',
  ChildMarkdownRemarkFrontmatterFeaturedImageMode = 'childMarkdownRemark___frontmatter___featuredImage___mode',
  ChildMarkdownRemarkFrontmatterFeaturedImageNlink = 'childMarkdownRemark___frontmatter___featuredImage___nlink',
  ChildMarkdownRemarkFrontmatterFeaturedImageUid = 'childMarkdownRemark___frontmatter___featuredImage___uid',
  ChildMarkdownRemarkFrontmatterFeaturedImageGid = 'childMarkdownRemark___frontmatter___featuredImage___gid',
  ChildMarkdownRemarkFrontmatterFeaturedImageRdev = 'childMarkdownRemark___frontmatter___featuredImage___rdev',
  ChildMarkdownRemarkFrontmatterFeaturedImageIno = 'childMarkdownRemark___frontmatter___featuredImage___ino',
  ChildMarkdownRemarkFrontmatterFeaturedImageAtimeMs = 'childMarkdownRemark___frontmatter___featuredImage___atimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedImageMtimeMs = 'childMarkdownRemark___frontmatter___featuredImage___mtimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedImageCtimeMs = 'childMarkdownRemark___frontmatter___featuredImage___ctimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedImageAtime = 'childMarkdownRemark___frontmatter___featuredImage___atime',
  ChildMarkdownRemarkFrontmatterFeaturedImageMtime = 'childMarkdownRemark___frontmatter___featuredImage___mtime',
  ChildMarkdownRemarkFrontmatterFeaturedImageCtime = 'childMarkdownRemark___frontmatter___featuredImage___ctime',
  ChildMarkdownRemarkFrontmatterFeaturedImageBirthtime = 'childMarkdownRemark___frontmatter___featuredImage___birthtime',
  ChildMarkdownRemarkFrontmatterFeaturedImageBirthtimeMs = 'childMarkdownRemark___frontmatter___featuredImage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterFeaturedImageBlksize = 'childMarkdownRemark___frontmatter___featuredImage___blksize',
  ChildMarkdownRemarkFrontmatterFeaturedImageBlocks = 'childMarkdownRemark___frontmatter___featuredImage___blocks',
  ChildMarkdownRemarkFrontmatterFeaturedImagePublicUrl = 'childMarkdownRemark___frontmatter___featuredImage___publicURL',
  ChildMarkdownRemarkFrontmatterFeaturedImageId = 'childMarkdownRemark___frontmatter___featuredImage___id',
  ChildMarkdownRemarkFrontmatterFeaturedImageChildren = 'childMarkdownRemark___frontmatter___featuredImage___children',
  ChildMarkdownRemarkFrontmatterFeaturedImageCredit = 'childMarkdownRemark___frontmatter___featuredImageCredit',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterLastUpdated = 'childMarkdownRemark___frontmatter___lastUpdated',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsReadingTimeText = 'childMarkdownRemark___fields___readingTime___text',
  ChildMarkdownRemarkFieldsReadingTimeMinutes = 'childMarkdownRemark___fields___readingTime___minutes',
  ChildMarkdownRemarkFieldsReadingTimeTime = 'childMarkdownRemark___fields___readingTime___time',
  ChildMarkdownRemarkFieldsReadingTimeWords = 'childMarkdownRemark___fields___readingTime___words',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type GitHub = {
   __typename?: 'GitHub',
  codeOfConduct?: Maybe<GitHub_CodeOfConduct>,
  codesOfConduct?: Maybe<Array<Maybe<GitHub_CodeOfConduct>>>,
  enterprise?: Maybe<GitHub_Enterprise>,
  enterpriseAdministratorInvitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>,
  enterpriseAdministratorInvitationByToken?: Maybe<GitHub_EnterpriseAdministratorInvitation>,
  license?: Maybe<GitHub_License>,
  licenses: Array<Maybe<GitHub_License>>,
  marketplaceCategories: Array<GitHub_MarketplaceCategory>,
  marketplaceCategory?: Maybe<GitHub_MarketplaceCategory>,
  marketplaceListing?: Maybe<GitHub_MarketplaceListing>,
  marketplaceListings: GitHub_MarketplaceListingConnection,
  meta: GitHub_GitHubMetadata,
  node?: Maybe<GitHub_Node>,
  nodes: Array<Maybe<GitHub_Node>>,
  organization?: Maybe<GitHub_Organization>,
  rateLimit?: Maybe<GitHub_RateLimit>,
  relay: Query,
  repository?: Maybe<GitHub_Repository>,
  repositoryOwner?: Maybe<GitHub_RepositoryOwner>,
  resource?: Maybe<GitHub_UniformResourceLocatable>,
  search: GitHub_SearchResultItemConnection,
  securityAdvisories: GitHub_SecurityAdvisoryConnection,
  securityAdvisory?: Maybe<GitHub_SecurityAdvisory>,
  securityVulnerabilities: GitHub_SecurityVulnerabilityConnection,
  sponsorsListing?: Maybe<GitHub_SponsorsListing>,
  topic?: Maybe<GitHub_Topic>,
  user?: Maybe<GitHub_User>,
  viewer: GitHub_User,
};


export type GitHubCodeOfConductArgs = {
  key: Scalars['String']
};


export type GitHubEnterpriseArgs = {
  slug: Scalars['String'],
  invitationToken?: Maybe<Scalars['String']>
};


export type GitHubEnterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'],
  enterpriseSlug: Scalars['String'],
  role: GitHub_EnterpriseAdministratorRole
};


export type GitHubEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String']
};


export type GitHubLicenseArgs = {
  key: Scalars['String']
};


export type GitHubMarketplaceCategoriesArgs = {
  includeCategories?: Maybe<Array<Scalars['String']>>,
  excludeEmpty?: Maybe<Scalars['Boolean']>,
  excludeSubcategories?: Maybe<Scalars['Boolean']>
};


export type GitHubMarketplaceCategoryArgs = {
  slug: Scalars['String'],
  useTopicAliases?: Maybe<Scalars['Boolean']>
};


export type GitHubMarketplaceListingArgs = {
  slug: Scalars['String']
};


export type GitHubMarketplaceListingsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  categorySlug?: Maybe<Scalars['String']>,
  useTopicAliases?: Maybe<Scalars['Boolean']>,
  viewerCanAdmin?: Maybe<Scalars['Boolean']>,
  adminId?: Maybe<Scalars['ID']>,
  organizationId?: Maybe<Scalars['ID']>,
  allStates?: Maybe<Scalars['Boolean']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>,
  primaryCategoryOnly?: Maybe<Scalars['Boolean']>,
  withFreeTrialsOnly?: Maybe<Scalars['Boolean']>
};


export type GitHubNodeArgs = {
  id: Scalars['ID']
};


export type GitHubNodesArgs = {
  ids: Array<Scalars['ID']>
};


export type GitHubOrganizationArgs = {
  login: Scalars['String']
};


export type GitHubRateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>
};


export type GitHubRepositoryArgs = {
  owner: Scalars['String'],
  name: Scalars['String']
};


export type GitHubRepositoryOwnerArgs = {
  login: Scalars['String']
};


export type GitHubResourceArgs = {
  url: Scalars['GitHub_URI']
};


export type GitHubSearchArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query: Scalars['String'],
  type: GitHub_SearchType
};


export type GitHubSecurityAdvisoriesArgs = {
  orderBy?: Maybe<GitHub_SecurityAdvisoryOrder>,
  identifier?: Maybe<GitHub_SecurityAdvisoryIdentifierFilter>,
  publishedSince?: Maybe<Scalars['GitHub_DateTime']>,
  updatedSince?: Maybe<Scalars['GitHub_DateTime']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHubSecurityAdvisoryArgs = {
  ghsaId: Scalars['String']
};


export type GitHubSecurityVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHub_SecurityVulnerabilityOrder>,
  ecosystem?: Maybe<GitHub_SecurityAdvisoryEcosystem>,
  package?: Maybe<Scalars['String']>,
  severities?: Maybe<Array<GitHub_SecurityAdvisorySeverity>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHubSponsorsListingArgs = {
  slug: Scalars['String']
};


export type GitHubTopicArgs = {
  name: Scalars['String']
};


export type GitHubUserArgs = {
  login: Scalars['String']
};

export type GitHub_AcceptEnterpriseAdministratorInvitationInput = {
  invitationId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AcceptEnterpriseAdministratorInvitationPayload = {
   __typename?: 'GitHub_AcceptEnterpriseAdministratorInvitationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_AcceptTopicSuggestionInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AcceptTopicSuggestionPayload = {
   __typename?: 'GitHub_AcceptTopicSuggestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  topic?: Maybe<GitHub_Topic>,
};

export enum GitHub_ActionExecutionCapabilitySetting {
  Disabled = 'DISABLED',
  AllActions = 'ALL_ACTIONS',
  LocalActionsOnly = 'LOCAL_ACTIONS_ONLY',
  NoPolicy = 'NO_POLICY'
}

export type GitHub_Actor = {
  avatarUrl: Scalars['GitHub_URI'],
  login: Scalars['String'],
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_ActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type GitHub_ActorLocation = {
   __typename?: 'GitHub_ActorLocation',
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  regionCode?: Maybe<Scalars['String']>,
};

export type GitHub_AddAssigneesToAssignableInput = {
  assignableId: Scalars['ID'],
  assigneeIds: Array<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddAssigneesToAssignablePayload = {
   __typename?: 'GitHub_AddAssigneesToAssignablePayload',
  assignable?: Maybe<GitHub_Assignable>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddCommentInput = {
  subjectId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddCommentPayload = {
   __typename?: 'GitHub_AddCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  commentEdge?: Maybe<GitHub_IssueCommentEdge>,
  subject?: Maybe<GitHub_Node>,
  timelineEdge?: Maybe<GitHub_IssueTimelineItemEdge>,
};

export type GitHub_AddedToProjectEvent = GitHub_Node & {
   __typename?: 'GitHub_AddedToProjectEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type GitHub_AddLabelsToLabelableInput = {
  labelableId: Scalars['ID'],
  labelIds: Array<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddLabelsToLabelablePayload = {
   __typename?: 'GitHub_AddLabelsToLabelablePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  labelable?: Maybe<GitHub_Labelable>,
};

export type GitHub_AddProjectCardInput = {
  projectColumnId: Scalars['ID'],
  contentId?: Maybe<Scalars['ID']>,
  note?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddProjectCardPayload = {
   __typename?: 'GitHub_AddProjectCardPayload',
  cardEdge?: Maybe<GitHub_ProjectCardEdge>,
  clientMutationId?: Maybe<Scalars['String']>,
  projectColumn?: Maybe<GitHub_ProjectColumn>,
};

export type GitHub_AddProjectColumnInput = {
  projectId: Scalars['ID'],
  name: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddProjectColumnPayload = {
   __typename?: 'GitHub_AddProjectColumnPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  columnEdge?: Maybe<GitHub_ProjectColumnEdge>,
  project?: Maybe<GitHub_Project>,
};

export type GitHub_AddPullRequestReviewCommentInput = {
  pullRequestId?: Maybe<Scalars['ID']>,
  pullRequestReviewId?: Maybe<Scalars['ID']>,
  commitOID?: Maybe<Scalars['GitHub_GitObjectID']>,
  body: Scalars['String'],
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  inReplyTo?: Maybe<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddPullRequestReviewCommentPayload = {
   __typename?: 'GitHub_AddPullRequestReviewCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  comment?: Maybe<GitHub_PullRequestReviewComment>,
  commentEdge?: Maybe<GitHub_PullRequestReviewCommentEdge>,
};

export type GitHub_AddPullRequestReviewInput = {
  pullRequestId: Scalars['ID'],
  commitOID?: Maybe<Scalars['GitHub_GitObjectID']>,
  body?: Maybe<Scalars['String']>,
  event?: Maybe<GitHub_PullRequestReviewEvent>,
  comments?: Maybe<Array<Maybe<GitHub_DraftPullRequestReviewComment>>>,
  threads?: Maybe<Array<Maybe<GitHub_DraftPullRequestReviewThread>>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddPullRequestReviewPayload = {
   __typename?: 'GitHub_AddPullRequestReviewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
  reviewEdge?: Maybe<GitHub_PullRequestReviewEdge>,
};

export type GitHub_AddPullRequestReviewThreadInput = {
  path: Scalars['String'],
  body: Scalars['String'],
  pullRequestReviewId: Scalars['ID'],
  line: Scalars['Int'],
  side?: Maybe<GitHub_DiffSide>,
  startLine?: Maybe<Scalars['Int']>,
  startSide?: Maybe<GitHub_DiffSide>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddPullRequestReviewThreadPayload = {
   __typename?: 'GitHub_AddPullRequestReviewThreadPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  thread?: Maybe<GitHub_PullRequestReviewThread>,
};

export type GitHub_AddReactionInput = {
  subjectId: Scalars['ID'],
  content: GitHub_ReactionContent,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddReactionPayload = {
   __typename?: 'GitHub_AddReactionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  reaction?: Maybe<GitHub_Reaction>,
  subject?: Maybe<GitHub_Reactable>,
};

export type GitHub_AddStarInput = {
  starrableId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_AddStarPayload = {
   __typename?: 'GitHub_AddStarPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  starrable?: Maybe<GitHub_Starrable>,
};

export type GitHub_App = GitHub_Node & {
   __typename?: 'GitHub_App',
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  logoBackgroundColor: Scalars['String'],
  logoUrl: Scalars['GitHub_URI'],
  name: Scalars['String'],
  slug: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_AppLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type GitHub_ArchiveRepositoryInput = {
  repositoryId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ArchiveRepositoryPayload = {
   __typename?: 'GitHub_ArchiveRepositoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_Assignable = {
  assignees: GitHub_UserConnection,
};


export type GitHub_AssignableAssigneesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_AssignedEvent = GitHub_Node & {
   __typename?: 'GitHub_AssignedEvent',
  actor?: Maybe<GitHub_Actor>,
  assignable: GitHub_Assignable,
  assignee?: Maybe<GitHub_Assignee>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  user?: Maybe<GitHub_User>,
};

export type GitHub_Assignee = GitHub_Bot | GitHub_Mannequin | GitHub_Organization | GitHub_User;

export type GitHub_AuditEntry = {
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  operationType?: Maybe<GitHub_OperationType>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_AuditEntryActor = GitHub_Bot | GitHub_Organization | GitHub_User;

export type GitHub_AuditLogOrder = {
  field?: Maybe<GitHub_AuditLogOrderField>,
  direction?: Maybe<GitHub_OrderDirection>,
};

export enum GitHub_AuditLogOrderField {
  CreatedAt = 'CREATED_AT'
}

export type GitHub_BaseRefChangedEvent = GitHub_Node & {
   __typename?: 'GitHub_BaseRefChangedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type GitHub_BaseRefForcePushedEvent = GitHub_Node & {
   __typename?: 'GitHub_BaseRefForcePushedEvent',
  actor?: Maybe<GitHub_Actor>,
  afterCommit?: Maybe<GitHub_Commit>,
  beforeCommit?: Maybe<GitHub_Commit>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  ref?: Maybe<GitHub_Ref>,
};

export type GitHub_Blame = {
   __typename?: 'GitHub_Blame',
  ranges: Array<GitHub_BlameRange>,
};

export type GitHub_BlameRange = {
   __typename?: 'GitHub_BlameRange',
  age: Scalars['Int'],
  commit: GitHub_Commit,
  endingLine: Scalars['Int'],
  startingLine: Scalars['Int'],
};

export type GitHub_Blob = GitHub_Node & GitHub_GitObject & {
   __typename?: 'GitHub_Blob',
  abbreviatedOid: Scalars['String'],
  byteSize: Scalars['Int'],
  commitResourcePath: Scalars['GitHub_URI'],
  commitUrl: Scalars['GitHub_URI'],
  id: Scalars['ID'],
  isBinary: Scalars['Boolean'],
  isTruncated: Scalars['Boolean'],
  oid: Scalars['GitHub_GitObjectID'],
  repository: GitHub_Repository,
  text?: Maybe<Scalars['String']>,
};

export type GitHub_Bot = GitHub_Node & GitHub_Actor & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Bot',
  avatarUrl: Scalars['GitHub_URI'],
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  login: Scalars['String'],
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_BotAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type GitHub_BranchProtectionRule = GitHub_Node & {
   __typename?: 'GitHub_BranchProtectionRule',
  branchProtectionRuleConflicts: GitHub_BranchProtectionRuleConflictConnection,
  creator?: Maybe<GitHub_Actor>,
  databaseId?: Maybe<Scalars['Int']>,
  dismissesStaleReviews: Scalars['Boolean'],
  id: Scalars['ID'],
  isAdminEnforced: Scalars['Boolean'],
  matchingRefs: GitHub_RefConnection,
  pattern: Scalars['String'],
  pushAllowances: GitHub_PushAllowanceConnection,
  repository?: Maybe<GitHub_Repository>,
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>,
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars['String']>>>,
  requiresApprovingReviews: Scalars['Boolean'],
  requiresCodeOwnerReviews: Scalars['Boolean'],
  requiresCommitSignatures: Scalars['Boolean'],
  requiresStatusChecks: Scalars['Boolean'],
  requiresStrictStatusChecks: Scalars['Boolean'],
  restrictsPushes: Scalars['Boolean'],
  restrictsReviewDismissals: Scalars['Boolean'],
  reviewDismissalAllowances: GitHub_ReviewDismissalAllowanceConnection,
};


export type GitHub_BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_BranchProtectionRuleMatchingRefsArgs = {
  query?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_BranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_BranchProtectionRuleConflict = {
   __typename?: 'GitHub_BranchProtectionRuleConflict',
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>,
  conflictingBranchProtectionRule?: Maybe<GitHub_BranchProtectionRule>,
  ref?: Maybe<GitHub_Ref>,
};

export type GitHub_BranchProtectionRuleConflictConnection = {
   __typename?: 'GitHub_BranchProtectionRuleConflictConnection',
  edges?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleConflictEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleConflict>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_BranchProtectionRuleConflictEdge = {
   __typename?: 'GitHub_BranchProtectionRuleConflictEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_BranchProtectionRuleConflict>,
};

export type GitHub_BranchProtectionRuleConnection = {
   __typename?: 'GitHub_BranchProtectionRuleConnection',
  edges?: Maybe<Array<Maybe<GitHub_BranchProtectionRuleEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_BranchProtectionRule>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_BranchProtectionRuleEdge = {
   __typename?: 'GitHub_BranchProtectionRuleEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_BranchProtectionRule>,
};

export type GitHub_CancelEnterpriseAdminInvitationInput = {
  invitationId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CancelEnterpriseAdminInvitationPayload = {
   __typename?: 'GitHub_CancelEnterpriseAdminInvitationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_ChangeUserStatusInput = {
  emoji?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  organizationId?: Maybe<Scalars['ID']>,
  limitedAvailability?: Maybe<Scalars['Boolean']>,
  expiresAt?: Maybe<Scalars['GitHub_DateTime']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ChangeUserStatusPayload = {
   __typename?: 'GitHub_ChangeUserStatusPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  status?: Maybe<GitHub_UserStatus>,
};

export type GitHub_ClearLabelsFromLabelableInput = {
  labelableId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ClearLabelsFromLabelablePayload = {
   __typename?: 'GitHub_ClearLabelsFromLabelablePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  labelable?: Maybe<GitHub_Labelable>,
};

export type GitHub_CloneProjectInput = {
  targetOwnerId: Scalars['ID'],
  sourceId: Scalars['ID'],
  includeWorkflows: Scalars['Boolean'],
  name: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  public?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CloneProjectPayload = {
   __typename?: 'GitHub_CloneProjectPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  jobStatusId?: Maybe<Scalars['String']>,
  project?: Maybe<GitHub_Project>,
};

export type GitHub_CloneTemplateRepositoryInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  ownerId: Scalars['ID'],
  description?: Maybe<Scalars['String']>,
  visibility: GitHub_RepositoryVisibility,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CloneTemplateRepositoryPayload = {
   __typename?: 'GitHub_CloneTemplateRepositoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_Closable = {
  closed: Scalars['Boolean'],
  closedAt?: Maybe<Scalars['GitHub_DateTime']>,
};

export type GitHub_ClosedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_ClosedEvent',
  actor?: Maybe<GitHub_Actor>,
  closable: GitHub_Closable,
  closer?: Maybe<GitHub_Closer>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_CloseIssueInput = {
  issueId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CloseIssuePayload = {
   __typename?: 'GitHub_CloseIssuePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  issue?: Maybe<GitHub_Issue>,
};

export type GitHub_ClosePullRequestInput = {
  pullRequestId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ClosePullRequestPayload = {
   __typename?: 'GitHub_ClosePullRequestPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
};

export type GitHub_Closer = GitHub_Commit | GitHub_PullRequest;

export type GitHub_CodeOfConduct = GitHub_Node & {
   __typename?: 'GitHub_CodeOfConduct',
  body?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  key: Scalars['String'],
  name: Scalars['String'],
  resourcePath?: Maybe<Scalars['GitHub_URI']>,
  url?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_CollaboratorAffiliation {
  Outside = 'OUTSIDE',
  Direct = 'DIRECT',
  All = 'ALL'
}

export type GitHub_Comment = {
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  updatedAt: Scalars['GitHub_DateTime'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_CommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum GitHub_CommentAuthorAssociation {
  Member = 'MEMBER',
  Owner = 'OWNER',
  Collaborator = 'COLLABORATOR',
  Contributor = 'CONTRIBUTOR',
  FirstTimeContributor = 'FIRST_TIME_CONTRIBUTOR',
  FirstTimer = 'FIRST_TIMER',
  None = 'NONE'
}

export enum GitHub_CommentCannotUpdateReason {
  Archived = 'ARCHIVED',
  InsufficientAccess = 'INSUFFICIENT_ACCESS',
  Locked = 'LOCKED',
  LoginRequired = 'LOGIN_REQUIRED',
  Maintenance = 'MAINTENANCE',
  VerifiedEmailRequired = 'VERIFIED_EMAIL_REQUIRED',
  Denied = 'DENIED'
}

export type GitHub_CommentDeletedEvent = GitHub_Node & {
   __typename?: 'GitHub_CommentDeletedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type GitHub_Commit = GitHub_Node & GitHub_GitObject & GitHub_Subscribable & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Commit',
  abbreviatedOid: Scalars['String'],
  additions: Scalars['Int'],
  associatedPullRequests?: Maybe<GitHub_PullRequestConnection>,
  author?: Maybe<GitHub_GitActor>,
  authoredByCommitter: Scalars['Boolean'],
  authoredDate: Scalars['GitHub_DateTime'],
  blame: GitHub_Blame,
  changedFiles: Scalars['Int'],
  comments: GitHub_CommitCommentConnection,
  commitResourcePath: Scalars['GitHub_URI'],
  commitUrl: Scalars['GitHub_URI'],
  committedDate: Scalars['GitHub_DateTime'],
  committedViaWeb: Scalars['Boolean'],
  committer?: Maybe<GitHub_GitActor>,
  deletions: Scalars['Int'],
  deployments?: Maybe<GitHub_DeploymentConnection>,
  history: GitHub_CommitHistoryConnection,
  id: Scalars['ID'],
  message: Scalars['String'],
  messageBody: Scalars['String'],
  messageBodyHTML: Scalars['GitHub_HTML'],
  messageHeadline: Scalars['String'],
  messageHeadlineHTML: Scalars['GitHub_HTML'],
  oid: Scalars['GitHub_GitObjectID'],
  onBehalfOf?: Maybe<GitHub_Organization>,
  parents: GitHub_CommitConnection,
  pushedDate?: Maybe<Scalars['GitHub_DateTime']>,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  signature?: Maybe<GitHub_GitSignature>,
  status?: Maybe<GitHub_Status>,
  statusCheckRollup?: Maybe<GitHub_StatusCheckRollup>,
  submodules: GitHub_SubmoduleConnection,
  tarballUrl: Scalars['GitHub_URI'],
  tree: GitHub_Tree,
  treeResourcePath: Scalars['GitHub_URI'],
  treeUrl: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
  zipballUrl: Scalars['GitHub_URI'],
};


export type GitHub_CommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_PullRequestOrder>
};


export type GitHub_CommitBlameArgs = {
  path: Scalars['String']
};


export type GitHub_CommitCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_CommitDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>,
  orderBy?: Maybe<GitHub_DeploymentOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_CommitHistoryArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  path?: Maybe<Scalars['String']>,
  author?: Maybe<GitHub_CommitAuthor>,
  since?: Maybe<Scalars['GitHub_GitTimestamp']>,
  until?: Maybe<Scalars['GitHub_GitTimestamp']>
};


export type GitHub_CommitParentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_CommitSubmodulesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_CommitAuthor = {
  id?: Maybe<Scalars['ID']>,
  emails?: Maybe<Array<Scalars['String']>>,
};

export type GitHub_CommitComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
   __typename?: 'GitHub_CommitComment',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  commit?: Maybe<GitHub_Commit>,
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  minimizedReason?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_CommitCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_CommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_CommitCommentConnection = {
   __typename?: 'GitHub_CommitCommentConnection',
  edges?: Maybe<Array<Maybe<GitHub_CommitCommentEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_CommitComment>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CommitCommentEdge = {
   __typename?: 'GitHub_CommitCommentEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_CommitComment>,
};

export type GitHub_CommitCommentThread = GitHub_Node & GitHub_RepositoryNode & {
   __typename?: 'GitHub_CommitCommentThread',
  comments: GitHub_CommitCommentConnection,
  commit?: Maybe<GitHub_Commit>,
  id: Scalars['ID'],
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  repository: GitHub_Repository,
};


export type GitHub_CommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_CommitConnection = {
   __typename?: 'GitHub_CommitConnection',
  edges?: Maybe<Array<Maybe<GitHub_CommitEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Commit>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CommitContributionOrder = {
  field: GitHub_CommitContributionOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_CommitContributionOrderField {
  OccurredAt = 'OCCURRED_AT',
  CommitCount = 'COMMIT_COUNT'
}

export type GitHub_CommitContributionsByRepository = {
   __typename?: 'GitHub_CommitContributionsByRepository',
  contributions: GitHub_CreatedCommitContributionConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_CommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_CommitContributionOrder>
};

export type GitHub_CommitEdge = {
   __typename?: 'GitHub_CommitEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Commit>,
};

export type GitHub_CommitHistoryConnection = {
   __typename?: 'GitHub_CommitHistoryConnection',
  edges?: Maybe<Array<Maybe<GitHub_CommitEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Commit>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ConnectedEvent = GitHub_Node & {
   __typename?: 'GitHub_ConnectedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  source: GitHub_ReferencedSubject,
  subject: GitHub_ReferencedSubject,
};

export type GitHub_Contribution = {
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_ContributionCalendar = {
   __typename?: 'GitHub_ContributionCalendar',
  colors: Array<Scalars['String']>,
  isHalloween: Scalars['Boolean'],
  months: Array<GitHub_ContributionCalendarMonth>,
  totalContributions: Scalars['Int'],
  weeks: Array<GitHub_ContributionCalendarWeek>,
};

export type GitHub_ContributionCalendarDay = {
   __typename?: 'GitHub_ContributionCalendarDay',
  color: Scalars['String'],
  contributionCount: Scalars['Int'],
  date: Scalars['GitHub_Date'],
  weekday: Scalars['Int'],
};

export type GitHub_ContributionCalendarMonth = {
   __typename?: 'GitHub_ContributionCalendarMonth',
  firstDay: Scalars['GitHub_Date'],
  name: Scalars['String'],
  totalWeeks: Scalars['Int'],
  year: Scalars['Int'],
};

export type GitHub_ContributionCalendarWeek = {
   __typename?: 'GitHub_ContributionCalendarWeek',
  contributionDays: Array<GitHub_ContributionCalendarDay>,
  firstDay: Scalars['GitHub_Date'],
};

export type GitHub_ContributionOrder = {
  field?: Maybe<GitHub_ContributionOrderField>,
  direction: GitHub_OrderDirection,
};

export enum GitHub_ContributionOrderField {
  OccurredAt = 'OCCURRED_AT'
}

export type GitHub_ContributionsCollection = {
   __typename?: 'GitHub_ContributionsCollection',
  commitContributionsByRepository: Array<GitHub_CommitContributionsByRepository>,
  contributionCalendar: GitHub_ContributionCalendar,
  contributionYears: Array<Scalars['Int']>,
  doesEndInCurrentMonth: Scalars['Boolean'],
  earliestRestrictedContributionDate?: Maybe<Scalars['GitHub_Date']>,
  endedAt: Scalars['GitHub_DateTime'],
  firstIssueContribution?: Maybe<GitHub_CreatedIssueOrRestrictedContribution>,
  firstPullRequestContribution?: Maybe<GitHub_CreatedPullRequestOrRestrictedContribution>,
  firstRepositoryContribution?: Maybe<GitHub_CreatedRepositoryOrRestrictedContribution>,
  hasActivityInThePast: Scalars['Boolean'],
  hasAnyContributions: Scalars['Boolean'],
  hasAnyRestrictedContributions: Scalars['Boolean'],
  isSingleDay: Scalars['Boolean'],
  issueContributions: GitHub_CreatedIssueContributionConnection,
  issueContributionsByRepository: Array<GitHub_IssueContributionsByRepository>,
  joinedGitHubContribution?: Maybe<GitHub_JoinedGitHubContribution>,
  latestRestrictedContributionDate?: Maybe<Scalars['GitHub_Date']>,
  mostRecentCollectionWithActivity?: Maybe<GitHub_ContributionsCollection>,
  mostRecentCollectionWithoutActivity?: Maybe<GitHub_ContributionsCollection>,
  popularIssueContribution?: Maybe<GitHub_CreatedIssueContribution>,
  popularPullRequestContribution?: Maybe<GitHub_CreatedPullRequestContribution>,
  pullRequestContributions: GitHub_CreatedPullRequestContributionConnection,
  pullRequestContributionsByRepository: Array<GitHub_PullRequestContributionsByRepository>,
  pullRequestReviewContributions: GitHub_CreatedPullRequestReviewContributionConnection,
  pullRequestReviewContributionsByRepository: Array<GitHub_PullRequestReviewContributionsByRepository>,
  repositoryContributions: GitHub_CreatedRepositoryContributionConnection,
  restrictedContributionsCount: Scalars['Int'],
  startedAt: Scalars['GitHub_DateTime'],
  totalCommitContributions: Scalars['Int'],
  totalIssueContributions: Scalars['Int'],
  totalPullRequestContributions: Scalars['Int'],
  totalPullRequestReviewContributions: Scalars['Int'],
  totalRepositoriesWithContributedCommits: Scalars['Int'],
  totalRepositoriesWithContributedIssues: Scalars['Int'],
  totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'],
  totalRepositoriesWithContributedPullRequests: Scalars['Int'],
  totalRepositoryContributions: Scalars['Int'],
  user: GitHub_User,
};


export type GitHub_ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>
};


export type GitHub_ContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};


export type GitHub_ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type GitHub_ContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};


export type GitHub_ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type GitHub_ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};


export type GitHub_ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>
};


export type GitHub_ContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  excludeFirst?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};


export type GitHub_ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type GitHub_ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type GitHub_ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type GitHub_ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>,
  excludePopular?: Maybe<Scalars['Boolean']>
};


export type GitHub_ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>
};

export type GitHub_ConvertedNoteToIssueEvent = GitHub_Node & {
   __typename?: 'GitHub_ConvertedNoteToIssueEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type GitHub_ConvertProjectCardNoteToIssueInput = {
  projectCardId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ConvertProjectCardNoteToIssuePayload = {
   __typename?: 'GitHub_ConvertProjectCardNoteToIssuePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  projectCard?: Maybe<GitHub_ProjectCard>,
};

export type GitHub_CreateBranchProtectionRuleInput = {
  repositoryId: Scalars['ID'],
  pattern: Scalars['String'],
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>,
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>,
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>,
  isAdminEnforced?: Maybe<Scalars['Boolean']>,
  requiresStatusChecks?: Maybe<Scalars['Boolean']>,
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>,
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>,
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>,
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>,
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>,
  restrictsPushes?: Maybe<Scalars['Boolean']>,
  pushActorIds?: Maybe<Array<Scalars['ID']>>,
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateBranchProtectionRulePayload = {
   __typename?: 'GitHub_CreateBranchProtectionRulePayload',
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreatedCommitContribution = GitHub_Contribution & {
   __typename?: 'GitHub_CreatedCommitContribution',
  commitCount: Scalars['Int'],
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_CreatedCommitContributionConnection = {
   __typename?: 'GitHub_CreatedCommitContributionConnection',
  edges?: Maybe<Array<Maybe<GitHub_CreatedCommitContributionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_CreatedCommitContribution>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CreatedCommitContributionEdge = {
   __typename?: 'GitHub_CreatedCommitContributionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_CreatedCommitContribution>,
};

export type GitHub_CreatedIssueContribution = GitHub_Contribution & {
   __typename?: 'GitHub_CreatedIssueContribution',
  isRestricted: Scalars['Boolean'],
  issue: GitHub_Issue,
  occurredAt: Scalars['GitHub_DateTime'],
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_CreatedIssueContributionConnection = {
   __typename?: 'GitHub_CreatedIssueContributionConnection',
  edges?: Maybe<Array<Maybe<GitHub_CreatedIssueContributionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_CreatedIssueContribution>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CreatedIssueContributionEdge = {
   __typename?: 'GitHub_CreatedIssueContributionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_CreatedIssueContribution>,
};

export type GitHub_CreatedIssueOrRestrictedContribution = GitHub_CreatedIssueContribution | GitHub_RestrictedContribution;

export type GitHub_CreatedPullRequestContribution = GitHub_Contribution & {
   __typename?: 'GitHub_CreatedPullRequestContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  pullRequest: GitHub_PullRequest,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_CreatedPullRequestContributionConnection = {
   __typename?: 'GitHub_CreatedPullRequestContributionConnection',
  edges?: Maybe<Array<Maybe<GitHub_CreatedPullRequestContributionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_CreatedPullRequestContribution>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CreatedPullRequestContributionEdge = {
   __typename?: 'GitHub_CreatedPullRequestContributionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_CreatedPullRequestContribution>,
};

export type GitHub_CreatedPullRequestOrRestrictedContribution = GitHub_CreatedPullRequestContribution | GitHub_RestrictedContribution;

export type GitHub_CreatedPullRequestReviewContribution = GitHub_Contribution & {
   __typename?: 'GitHub_CreatedPullRequestReviewContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  pullRequest: GitHub_PullRequest,
  pullRequestReview: GitHub_PullRequestReview,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_CreatedPullRequestReviewContributionConnection = {
   __typename?: 'GitHub_CreatedPullRequestReviewContributionConnection',
  edges?: Maybe<Array<Maybe<GitHub_CreatedPullRequestReviewContributionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_CreatedPullRequestReviewContribution>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CreatedPullRequestReviewContributionEdge = {
   __typename?: 'GitHub_CreatedPullRequestReviewContributionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_CreatedPullRequestReviewContribution>,
};

export type GitHub_CreatedRepositoryContribution = GitHub_Contribution & {
   __typename?: 'GitHub_CreatedRepositoryContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_CreatedRepositoryContributionConnection = {
   __typename?: 'GitHub_CreatedRepositoryContributionConnection',
  edges?: Maybe<Array<Maybe<GitHub_CreatedRepositoryContributionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_CreatedRepositoryContribution>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_CreatedRepositoryContributionEdge = {
   __typename?: 'GitHub_CreatedRepositoryContributionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_CreatedRepositoryContribution>,
};

export type GitHub_CreatedRepositoryOrRestrictedContribution = GitHub_CreatedRepositoryContribution | GitHub_RestrictedContribution;

export type GitHub_CreateEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'],
  login: Scalars['String'],
  profileName: Scalars['String'],
  billingEmail: Scalars['String'],
  adminLogins: Array<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateEnterpriseOrganizationPayload = {
   __typename?: 'GitHub_CreateEnterpriseOrganizationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  organization?: Maybe<GitHub_Organization>,
};

export type GitHub_CreateIpAllowListEntryInput = {
  ownerId: Scalars['ID'],
  allowListValue: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  isActive: Scalars['Boolean'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateIpAllowListEntryPayload = {
   __typename?: 'GitHub_CreateIpAllowListEntryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  ipAllowListEntry?: Maybe<GitHub_IpAllowListEntry>,
};

export type GitHub_CreateIssueInput = {
  repositoryId: Scalars['ID'],
  title: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  assigneeIds?: Maybe<Array<Scalars['ID']>>,
  milestoneId?: Maybe<Scalars['ID']>,
  labelIds?: Maybe<Array<Scalars['ID']>>,
  projectIds?: Maybe<Array<Scalars['ID']>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateIssuePayload = {
   __typename?: 'GitHub_CreateIssuePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  issue?: Maybe<GitHub_Issue>,
};

export type GitHub_CreateProjectInput = {
  ownerId: Scalars['ID'],
  name: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  template?: Maybe<GitHub_ProjectTemplate>,
  repositoryIds?: Maybe<Array<Scalars['ID']>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateProjectPayload = {
   __typename?: 'GitHub_CreateProjectPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  project?: Maybe<GitHub_Project>,
};

export type GitHub_CreatePullRequestInput = {
  repositoryId: Scalars['ID'],
  baseRefName: Scalars['String'],
  headRefName: Scalars['String'],
  title: Scalars['String'],
  body?: Maybe<Scalars['String']>,
  maintainerCanModify?: Maybe<Scalars['Boolean']>,
  draft?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreatePullRequestPayload = {
   __typename?: 'GitHub_CreatePullRequestPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
};

export type GitHub_CreateRefInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  oid: Scalars['GitHub_GitObjectID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateRefPayload = {
   __typename?: 'GitHub_CreateRefPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  ref?: Maybe<GitHub_Ref>,
};

export type GitHub_CreateRepositoryInput = {
  name: Scalars['String'],
  ownerId?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  visibility: GitHub_RepositoryVisibility,
  template?: Maybe<Scalars['Boolean']>,
  homepageUrl?: Maybe<Scalars['GitHub_URI']>,
  hasWikiEnabled?: Maybe<Scalars['Boolean']>,
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>,
  teamId?: Maybe<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateRepositoryPayload = {
   __typename?: 'GitHub_CreateRepositoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_CreateTeamDiscussionCommentInput = {
  discussionId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateTeamDiscussionCommentPayload = {
   __typename?: 'GitHub_CreateTeamDiscussionCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  teamDiscussionComment?: Maybe<GitHub_TeamDiscussionComment>,
};

export type GitHub_CreateTeamDiscussionInput = {
  teamId: Scalars['ID'],
  title: Scalars['String'],
  body: Scalars['String'],
  private?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_CreateTeamDiscussionPayload = {
   __typename?: 'GitHub_CreateTeamDiscussionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  teamDiscussion?: Maybe<GitHub_TeamDiscussion>,
};

export type GitHub_CrossReferencedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_CrossReferencedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  referencedAt: Scalars['GitHub_DateTime'],
  resourcePath: Scalars['GitHub_URI'],
  source: GitHub_ReferencedSubject,
  target: GitHub_ReferencedSubject,
  url: Scalars['GitHub_URI'],
  willCloseTarget: Scalars['Boolean'],
};



export type GitHub_DeclineTopicSuggestionInput = {
  repositoryId: Scalars['ID'],
  name: Scalars['String'],
  reason: GitHub_TopicSuggestionDeclineReason,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeclineTopicSuggestionPayload = {
   __typename?: 'GitHub_DeclineTopicSuggestionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  topic?: Maybe<GitHub_Topic>,
};

export enum GitHub_DefaultRepositoryPermissionField {
  None = 'NONE',
  Read = 'READ',
  Write = 'WRITE',
  Admin = 'ADMIN'
}

export type GitHub_Deletable = {
  viewerCanDelete: Scalars['Boolean'],
};

export type GitHub_DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteBranchProtectionRulePayload = {
   __typename?: 'GitHub_DeleteBranchProtectionRulePayload',
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteDeploymentInput = {
  id: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteDeploymentPayload = {
   __typename?: 'GitHub_DeleteDeploymentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteIpAllowListEntryPayload = {
   __typename?: 'GitHub_DeleteIpAllowListEntryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  ipAllowListEntry?: Maybe<GitHub_IpAllowListEntry>,
};

export type GitHub_DeleteIssueCommentInput = {
  id: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteIssueCommentPayload = {
   __typename?: 'GitHub_DeleteIssueCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteIssueInput = {
  issueId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteIssuePayload = {
   __typename?: 'GitHub_DeleteIssuePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_DeleteProjectCardInput = {
  cardId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteProjectCardPayload = {
   __typename?: 'GitHub_DeleteProjectCardPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  column?: Maybe<GitHub_ProjectColumn>,
  deletedCardId?: Maybe<Scalars['ID']>,
};

export type GitHub_DeleteProjectColumnInput = {
  columnId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteProjectColumnPayload = {
   __typename?: 'GitHub_DeleteProjectColumnPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  deletedColumnId?: Maybe<Scalars['ID']>,
  project?: Maybe<GitHub_Project>,
};

export type GitHub_DeleteProjectInput = {
  projectId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteProjectPayload = {
   __typename?: 'GitHub_DeleteProjectPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  owner?: Maybe<GitHub_ProjectOwner>,
};

export type GitHub_DeletePullRequestReviewCommentInput = {
  id: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeletePullRequestReviewCommentPayload = {
   __typename?: 'GitHub_DeletePullRequestReviewCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
};

export type GitHub_DeletePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeletePullRequestReviewPayload = {
   __typename?: 'GitHub_DeletePullRequestReviewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
};

export type GitHub_DeleteRefInput = {
  refId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteRefPayload = {
   __typename?: 'GitHub_DeleteRefPayload',
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteTeamDiscussionCommentInput = {
  id: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteTeamDiscussionCommentPayload = {
   __typename?: 'GitHub_DeleteTeamDiscussionCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteTeamDiscussionInput = {
  id: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DeleteTeamDiscussionPayload = {
   __typename?: 'GitHub_DeleteTeamDiscussionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DemilestonedEvent = GitHub_Node & {
   __typename?: 'GitHub_DemilestonedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  milestoneTitle: Scalars['String'],
  subject: GitHub_MilestoneItem,
};

export type GitHub_DeployedEvent = GitHub_Node & {
   __typename?: 'GitHub_DeployedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  deployment: GitHub_Deployment,
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  ref?: Maybe<GitHub_Ref>,
};

export type GitHub_DeployKey = GitHub_Node & {
   __typename?: 'GitHub_DeployKey',
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  key: Scalars['String'],
  readOnly: Scalars['Boolean'],
  title: Scalars['String'],
  verified: Scalars['Boolean'],
};

export type GitHub_DeployKeyConnection = {
   __typename?: 'GitHub_DeployKeyConnection',
  edges?: Maybe<Array<Maybe<GitHub_DeployKeyEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_DeployKey>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_DeployKeyEdge = {
   __typename?: 'GitHub_DeployKeyEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_DeployKey>,
};

export type GitHub_Deployment = GitHub_Node & {
   __typename?: 'GitHub_Deployment',
  commit?: Maybe<GitHub_Commit>,
  commitOid: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  creator: GitHub_Actor,
  databaseId?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  latestEnvironment?: Maybe<Scalars['String']>,
  latestStatus?: Maybe<GitHub_DeploymentStatus>,
  originalEnvironment?: Maybe<Scalars['String']>,
  payload?: Maybe<Scalars['String']>,
  ref?: Maybe<GitHub_Ref>,
  repository: GitHub_Repository,
  state?: Maybe<GitHub_DeploymentState>,
  statuses?: Maybe<GitHub_DeploymentStatusConnection>,
  task?: Maybe<Scalars['String']>,
  updatedAt: Scalars['GitHub_DateTime'],
};


export type GitHub_DeploymentStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_DeploymentConnection = {
   __typename?: 'GitHub_DeploymentConnection',
  edges?: Maybe<Array<Maybe<GitHub_DeploymentEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Deployment>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_DeploymentEdge = {
   __typename?: 'GitHub_DeploymentEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Deployment>,
};

export type GitHub_DeploymentEnvironmentChangedEvent = GitHub_Node & {
   __typename?: 'GitHub_DeploymentEnvironmentChangedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  deploymentStatus: GitHub_DeploymentStatus,
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
};

export type GitHub_DeploymentOrder = {
  field: GitHub_DeploymentOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_DeploymentOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum GitHub_DeploymentState {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Destroyed = 'DESTROYED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  InProgress = 'IN_PROGRESS'
}

export type GitHub_DeploymentStatus = GitHub_Node & {
   __typename?: 'GitHub_DeploymentStatus',
  createdAt: Scalars['GitHub_DateTime'],
  creator: GitHub_Actor,
  deployment: GitHub_Deployment,
  description?: Maybe<Scalars['String']>,
  environmentUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  logUrl?: Maybe<Scalars['GitHub_URI']>,
  state: GitHub_DeploymentStatusState,
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_DeploymentStatusConnection = {
   __typename?: 'GitHub_DeploymentStatusConnection',
  edges?: Maybe<Array<Maybe<GitHub_DeploymentStatusEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_DeploymentStatus>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_DeploymentStatusEdge = {
   __typename?: 'GitHub_DeploymentStatusEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_DeploymentStatus>,
};

export enum GitHub_DeploymentStatusState {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  Error = 'ERROR',
  Queued = 'QUEUED',
  InProgress = 'IN_PROGRESS'
}

export enum GitHub_DiffSide {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type GitHub_DisconnectedEvent = GitHub_Node & {
   __typename?: 'GitHub_DisconnectedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  source: GitHub_ReferencedSubject,
  subject: GitHub_ReferencedSubject,
};

export type GitHub_DismissPullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'],
  message: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_DismissPullRequestReviewPayload = {
   __typename?: 'GitHub_DismissPullRequestReviewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
};

export type GitHub_DraftPullRequestReviewComment = {
  path: Scalars['String'],
  position: Scalars['Int'],
  body: Scalars['String'],
};

export type GitHub_DraftPullRequestReviewThread = {
  path: Scalars['String'],
  line: Scalars['Int'],
  side?: Maybe<GitHub_DiffSide>,
  startLine?: Maybe<Scalars['Int']>,
  startSide?: Maybe<GitHub_DiffSide>,
  body: Scalars['String'],
};

export type GitHub_Enterprise = GitHub_Node & {
   __typename?: 'GitHub_Enterprise',
  avatarUrl: Scalars['GitHub_URI'],
  billingInfo?: Maybe<GitHub_EnterpriseBillingInfo>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  descriptionHTML: Scalars['GitHub_HTML'],
  id: Scalars['ID'],
  location?: Maybe<Scalars['String']>,
  members: GitHub_EnterpriseMemberConnection,
  name: Scalars['String'],
  organizations: GitHub_OrganizationConnection,
  ownerInfo?: Maybe<GitHub_EnterpriseOwnerInfo>,
  resourcePath: Scalars['GitHub_URI'],
  slug: Scalars['String'],
  url: Scalars['GitHub_URI'],
  userAccounts: GitHub_EnterpriseUserAccountConnection,
  viewerIsAdmin: Scalars['Boolean'],
  websiteUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_EnterpriseAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseMembersArgs = {
  organizationLogins?: Maybe<Array<Scalars['String']>>,
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_EnterpriseMemberOrder>,
  role?: Maybe<GitHub_EnterpriseUserAccountMembershipRole>,
  deployment?: Maybe<GitHub_EnterpriseUserDeployment>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOrganizationsArgs = {
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_OrganizationOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseUserAccountsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_EnterpriseAdministratorConnection = {
   __typename?: 'GitHub_EnterpriseAdministratorConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseAdministratorEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseAdministratorEdge = {
   __typename?: 'GitHub_EnterpriseAdministratorEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_User>,
  role: GitHub_EnterpriseAdministratorRole,
};

export type GitHub_EnterpriseAdministratorInvitation = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseAdministratorInvitation',
  createdAt: Scalars['GitHub_DateTime'],
  email?: Maybe<Scalars['String']>,
  enterprise: GitHub_Enterprise,
  id: Scalars['ID'],
  invitee?: Maybe<GitHub_User>,
  inviter?: Maybe<GitHub_User>,
  role: GitHub_EnterpriseAdministratorRole,
};

export type GitHub_EnterpriseAdministratorInvitationConnection = {
   __typename?: 'GitHub_EnterpriseAdministratorInvitationConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseAdministratorInvitationEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseAdministratorInvitation>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseAdministratorInvitationEdge = {
   __typename?: 'GitHub_EnterpriseAdministratorInvitationEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseAdministratorInvitation>,
};

export type GitHub_EnterpriseAdministratorInvitationOrder = {
  field: GitHub_EnterpriseAdministratorInvitationOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_EnterpriseAdministratorInvitationOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum GitHub_EnterpriseAdministratorRole {
  Owner = 'OWNER',
  BillingManager = 'BILLING_MANAGER'
}

export type GitHub_EnterpriseAuditEntryData = {
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_EnterpriseBillingInfo = {
   __typename?: 'GitHub_EnterpriseBillingInfo',
  allLicensableUsersCount: Scalars['Int'],
  assetPacks: Scalars['Int'],
  availableSeats: Scalars['Int'],
  bandwidthQuota: Scalars['Float'],
  bandwidthUsage: Scalars['Float'],
  bandwidthUsagePercentage: Scalars['Int'],
  seats: Scalars['Int'],
  storageQuota: Scalars['Float'],
  storageUsage: Scalars['Float'],
  storageUsagePercentage: Scalars['Int'],
  totalAvailableLicenses: Scalars['Int'],
  totalLicenses: Scalars['Int'],
};

export enum GitHub_EnterpriseDefaultRepositoryPermissionSettingValue {
  NoPolicy = 'NO_POLICY',
  Admin = 'ADMIN',
  Write = 'WRITE',
  Read = 'READ',
  None = 'NONE'
}

export enum GitHub_EnterpriseEnabledDisabledSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED',
  NoPolicy = 'NO_POLICY'
}

export enum GitHub_EnterpriseEnabledSettingValue {
  Enabled = 'ENABLED',
  NoPolicy = 'NO_POLICY'
}

export type GitHub_EnterpriseIdentityProvider = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseIdentityProvider',
  digestMethod?: Maybe<GitHub_SamlDigestAlgorithm>,
  enterprise?: Maybe<GitHub_Enterprise>,
  externalIdentities: GitHub_ExternalIdentityConnection,
  id: Scalars['ID'],
  idpCertificate?: Maybe<Scalars['GitHub_X509Certificate']>,
  issuer?: Maybe<Scalars['String']>,
  recoveryCodes?: Maybe<Array<Scalars['String']>>,
  signatureMethod?: Maybe<GitHub_SamlSignatureAlgorithm>,
  ssoUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_EnterpriseIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_EnterpriseMember = GitHub_EnterpriseUserAccount | GitHub_User;

export type GitHub_EnterpriseMemberConnection = {
   __typename?: 'GitHub_EnterpriseMemberConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseMemberEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseMember>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseMemberEdge = {
   __typename?: 'GitHub_EnterpriseMemberEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node?: Maybe<GitHub_EnterpriseMember>,
};

export type GitHub_EnterpriseMemberOrder = {
  field: GitHub_EnterpriseMemberOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_EnterpriseMemberOrderField {
  Login = 'LOGIN',
  CreatedAt = 'CREATED_AT'
}

export enum GitHub_EnterpriseMembersCanCreateRepositoriesSettingValue {
  NoPolicy = 'NO_POLICY',
  All = 'ALL',
  Public = 'PUBLIC',
  Private = 'PRIVATE',
  Disabled = 'DISABLED'
}

export enum GitHub_EnterpriseMembersCanMakePurchasesSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type GitHub_EnterpriseOrganizationMembershipConnection = {
   __typename?: 'GitHub_EnterpriseOrganizationMembershipConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseOrganizationMembershipEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Organization>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseOrganizationMembershipEdge = {
   __typename?: 'GitHub_EnterpriseOrganizationMembershipEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Organization>,
  role: GitHub_EnterpriseUserAccountMembershipRole,
};

export type GitHub_EnterpriseOutsideCollaboratorConnection = {
   __typename?: 'GitHub_EnterpriseOutsideCollaboratorConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseOutsideCollaboratorEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseOutsideCollaboratorEdge = {
   __typename?: 'GitHub_EnterpriseOutsideCollaboratorEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node?: Maybe<GitHub_User>,
  repositories: GitHub_EnterpriseRepositoryInfoConnection,
};


export type GitHub_EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_RepositoryOrder>
};

export type GitHub_EnterpriseOwnerInfo = {
   __typename?: 'GitHub_EnterpriseOwnerInfo',
  actionExecutionCapabilitySettingOrganizations: GitHub_OrganizationConnection,
  admins: GitHub_EnterpriseAdministratorConnection,
  affiliatedUsersWithTwoFactorDisabled: GitHub_UserConnection,
  affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'],
  allowPrivateRepositoryForkingSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  allowPrivateRepositoryForkingSettingOrganizations: GitHub_OrganizationConnection,
  defaultRepositoryPermissionSetting: GitHub_EnterpriseDefaultRepositoryPermissionSettingValue,
  defaultRepositoryPermissionSettingOrganizations: GitHub_OrganizationConnection,
  enterpriseServerInstallations: GitHub_EnterpriseServerInstallationConnection,
  ipAllowListEnabledSetting: GitHub_IpAllowListEnabledSettingValue,
  ipAllowListEntries: GitHub_IpAllowListEntryConnection,
  isUpdatingDefaultRepositoryPermission: Scalars['Boolean'],
  isUpdatingTwoFactorRequirement: Scalars['Boolean'],
  membersCanChangeRepositoryVisibilitySetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  membersCanChangeRepositoryVisibilitySettingOrganizations: GitHub_OrganizationConnection,
  membersCanCreateInternalRepositoriesSetting?: Maybe<Scalars['Boolean']>,
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Scalars['Boolean']>,
  membersCanCreatePublicRepositoriesSetting?: Maybe<Scalars['Boolean']>,
  membersCanCreateRepositoriesSetting?: Maybe<GitHub_EnterpriseMembersCanCreateRepositoriesSettingValue>,
  membersCanCreateRepositoriesSettingOrganizations: GitHub_OrganizationConnection,
  membersCanDeleteIssuesSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  membersCanDeleteIssuesSettingOrganizations: GitHub_OrganizationConnection,
  membersCanDeleteRepositoriesSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  membersCanDeleteRepositoriesSettingOrganizations: GitHub_OrganizationConnection,
  membersCanInviteCollaboratorsSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  membersCanInviteCollaboratorsSettingOrganizations: GitHub_OrganizationConnection,
  membersCanMakePurchasesSetting: GitHub_EnterpriseMembersCanMakePurchasesSettingValue,
  membersCanUpdateProtectedBranchesSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  membersCanUpdateProtectedBranchesSettingOrganizations: GitHub_OrganizationConnection,
  membersCanViewDependencyInsightsSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  membersCanViewDependencyInsightsSettingOrganizations: GitHub_OrganizationConnection,
  organizationProjectsSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  organizationProjectsSettingOrganizations: GitHub_OrganizationConnection,
  outsideCollaborators: GitHub_EnterpriseOutsideCollaboratorConnection,
  pendingAdminInvitations: GitHub_EnterpriseAdministratorInvitationConnection,
  pendingCollaborators: GitHub_EnterprisePendingCollaboratorConnection,
  pendingMemberInvitations: GitHub_EnterprisePendingMemberInvitationConnection,
  repositoryProjectsSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  repositoryProjectsSettingOrganizations: GitHub_OrganizationConnection,
  samlIdentityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>,
  samlIdentityProviderSettingOrganizations: GitHub_OrganizationConnection,
  teamDiscussionsSetting: GitHub_EnterpriseEnabledDisabledSettingValue,
  teamDiscussionsSettingOrganizations: GitHub_OrganizationConnection,
  twoFactorRequiredSetting: GitHub_EnterpriseEnabledSettingValue,
  twoFactorRequiredSettingOrganizations: GitHub_OrganizationConnection,
};


export type GitHub_EnterpriseOwnerInfoActionExecutionCapabilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoAdminsArgs = {
  query?: Maybe<Scalars['String']>,
  role?: Maybe<GitHub_EnterpriseAdministratorRole>,
  orderBy?: Maybe<GitHub_EnterpriseMemberOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: GitHub_DefaultRepositoryPermissionField,
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  connectedOnly?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_EnterpriseServerInstallationOrder>
};


export type GitHub_EnterpriseOwnerInfoIpAllowListEntriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_IpAllowListEntryOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: GitHub_OrganizationMembersCanCreateRepositoriesSettingValue,
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  login?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_EnterpriseMemberOrder>,
  visibility?: Maybe<GitHub_RepositoryVisibility>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_EnterpriseAdministratorInvitationOrder>,
  role?: Maybe<GitHub_EnterpriseAdministratorRole>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOwnerInfoPendingCollaboratorsArgs = {
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_RepositoryInvitationOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  query?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: GitHub_IdentityProviderConfigurationState,
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};


export type GitHub_EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  value: Scalars['Boolean'],
  orderBy?: Maybe<GitHub_OrganizationOrder>
};

export type GitHub_EnterprisePendingCollaboratorConnection = {
   __typename?: 'GitHub_EnterprisePendingCollaboratorConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterprisePendingCollaboratorEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterprisePendingCollaboratorEdge = {
   __typename?: 'GitHub_EnterprisePendingCollaboratorEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node?: Maybe<GitHub_User>,
  repositories: GitHub_EnterpriseRepositoryInfoConnection,
};


export type GitHub_EnterprisePendingCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_RepositoryOrder>
};

export type GitHub_EnterprisePendingMemberInvitationConnection = {
   __typename?: 'GitHub_EnterprisePendingMemberInvitationConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterprisePendingMemberInvitationEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationInvitation>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
  totalUniqueUserCount: Scalars['Int'],
};

export type GitHub_EnterprisePendingMemberInvitationEdge = {
   __typename?: 'GitHub_EnterprisePendingMemberInvitationEdge',
  cursor: Scalars['String'],
  isUnlicensed: Scalars['Boolean'],
  node?: Maybe<GitHub_OrganizationInvitation>,
};

export type GitHub_EnterpriseRepositoryInfo = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseRepositoryInfo',
  id: Scalars['ID'],
  isPrivate: Scalars['Boolean'],
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
};

export type GitHub_EnterpriseRepositoryInfoConnection = {
   __typename?: 'GitHub_EnterpriseRepositoryInfoConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseRepositoryInfoEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseRepositoryInfo>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseRepositoryInfoEdge = {
   __typename?: 'GitHub_EnterpriseRepositoryInfoEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseRepositoryInfo>,
};

export type GitHub_EnterpriseServerInstallation = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseServerInstallation',
  createdAt: Scalars['GitHub_DateTime'],
  customerName: Scalars['String'],
  hostName: Scalars['String'],
  id: Scalars['ID'],
  isConnected: Scalars['Boolean'],
  updatedAt: Scalars['GitHub_DateTime'],
  userAccounts: GitHub_EnterpriseServerUserAccountConnection,
  userAccountsUploads: GitHub_EnterpriseServerUserAccountsUploadConnection,
};


export type GitHub_EnterpriseServerInstallationUserAccountsArgs = {
  orderBy?: Maybe<GitHub_EnterpriseServerUserAccountOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseServerInstallationUserAccountsUploadsArgs = {
  orderBy?: Maybe<GitHub_EnterpriseServerUserAccountsUploadOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_EnterpriseServerInstallationConnection = {
   __typename?: 'GitHub_EnterpriseServerInstallationConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerInstallationEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerInstallation>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseServerInstallationEdge = {
   __typename?: 'GitHub_EnterpriseServerInstallationEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseServerInstallation>,
};

export type GitHub_EnterpriseServerInstallationOrder = {
  field: GitHub_EnterpriseServerInstallationOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_EnterpriseServerInstallationOrderField {
  HostName = 'HOST_NAME',
  CustomerName = 'CUSTOMER_NAME',
  CreatedAt = 'CREATED_AT'
}

export type GitHub_EnterpriseServerUserAccount = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseServerUserAccount',
  createdAt: Scalars['GitHub_DateTime'],
  emails: GitHub_EnterpriseServerUserAccountEmailConnection,
  enterpriseServerInstallation: GitHub_EnterpriseServerInstallation,
  id: Scalars['ID'],
  isSiteAdmin: Scalars['Boolean'],
  login: Scalars['String'],
  profileName?: Maybe<Scalars['String']>,
  remoteCreatedAt: Scalars['GitHub_DateTime'],
  remoteUserId: Scalars['Int'],
  updatedAt: Scalars['GitHub_DateTime'],
};


export type GitHub_EnterpriseServerUserAccountEmailsArgs = {
  orderBy?: Maybe<GitHub_EnterpriseServerUserAccountEmailOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_EnterpriseServerUserAccountConnection = {
   __typename?: 'GitHub_EnterpriseServerUserAccountConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccount>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseServerUserAccountEdge = {
   __typename?: 'GitHub_EnterpriseServerUserAccountEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseServerUserAccount>,
};

export type GitHub_EnterpriseServerUserAccountEmail = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseServerUserAccountEmail',
  createdAt: Scalars['GitHub_DateTime'],
  email: Scalars['String'],
  id: Scalars['ID'],
  isPrimary: Scalars['Boolean'],
  updatedAt: Scalars['GitHub_DateTime'],
  userAccount: GitHub_EnterpriseServerUserAccount,
};

export type GitHub_EnterpriseServerUserAccountEmailConnection = {
   __typename?: 'GitHub_EnterpriseServerUserAccountEmailConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountEmailEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountEmail>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseServerUserAccountEmailEdge = {
   __typename?: 'GitHub_EnterpriseServerUserAccountEmailEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseServerUserAccountEmail>,
};

export type GitHub_EnterpriseServerUserAccountEmailOrder = {
  field: GitHub_EnterpriseServerUserAccountEmailOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_EnterpriseServerUserAccountEmailOrderField {
  Email = 'EMAIL'
}

export type GitHub_EnterpriseServerUserAccountOrder = {
  field: GitHub_EnterpriseServerUserAccountOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_EnterpriseServerUserAccountOrderField {
  Login = 'LOGIN',
  RemoteCreatedAt = 'REMOTE_CREATED_AT'
}

export type GitHub_EnterpriseServerUserAccountsUpload = GitHub_Node & {
   __typename?: 'GitHub_EnterpriseServerUserAccountsUpload',
  createdAt: Scalars['GitHub_DateTime'],
  enterprise: GitHub_Enterprise,
  enterpriseServerInstallation: GitHub_EnterpriseServerInstallation,
  id: Scalars['ID'],
  name: Scalars['String'],
  syncState: GitHub_EnterpriseServerUserAccountsUploadSyncState,
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_EnterpriseServerUserAccountsUploadConnection = {
   __typename?: 'GitHub_EnterpriseServerUserAccountsUploadConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountsUploadEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseServerUserAccountsUpload>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseServerUserAccountsUploadEdge = {
   __typename?: 'GitHub_EnterpriseServerUserAccountsUploadEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseServerUserAccountsUpload>,
};

export type GitHub_EnterpriseServerUserAccountsUploadOrder = {
  field: GitHub_EnterpriseServerUserAccountsUploadOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_EnterpriseServerUserAccountsUploadOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum GitHub_EnterpriseServerUserAccountsUploadSyncState {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE'
}

export type GitHub_EnterpriseUserAccount = GitHub_Node & GitHub_Actor & {
   __typename?: 'GitHub_EnterpriseUserAccount',
  avatarUrl: Scalars['GitHub_URI'],
  createdAt: Scalars['GitHub_DateTime'],
  enterprise: GitHub_Enterprise,
  id: Scalars['ID'],
  login: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  organizations: GitHub_EnterpriseOrganizationMembershipConnection,
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  user?: Maybe<GitHub_User>,
};


export type GitHub_EnterpriseUserAccountAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type GitHub_EnterpriseUserAccountOrganizationsArgs = {
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_OrganizationOrder>,
  role?: Maybe<GitHub_EnterpriseUserAccountMembershipRole>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_EnterpriseUserAccountConnection = {
   __typename?: 'GitHub_EnterpriseUserAccountConnection',
  edges?: Maybe<Array<Maybe<GitHub_EnterpriseUserAccountEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_EnterpriseUserAccount>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_EnterpriseUserAccountEdge = {
   __typename?: 'GitHub_EnterpriseUserAccountEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_EnterpriseUserAccount>,
};

export enum GitHub_EnterpriseUserAccountMembershipRole {
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export enum GitHub_EnterpriseUserDeployment {
  Cloud = 'CLOUD',
  Server = 'SERVER'
}

export type GitHub_ExternalIdentity = GitHub_Node & {
   __typename?: 'GitHub_ExternalIdentity',
  guid: Scalars['String'],
  id: Scalars['ID'],
  organizationInvitation?: Maybe<GitHub_OrganizationInvitation>,
  samlIdentity?: Maybe<GitHub_ExternalIdentitySamlAttributes>,
  scimIdentity?: Maybe<GitHub_ExternalIdentityScimAttributes>,
  user?: Maybe<GitHub_User>,
};

export type GitHub_ExternalIdentityConnection = {
   __typename?: 'GitHub_ExternalIdentityConnection',
  edges?: Maybe<Array<Maybe<GitHub_ExternalIdentityEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_ExternalIdentity>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ExternalIdentityEdge = {
   __typename?: 'GitHub_ExternalIdentityEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_ExternalIdentity>,
};

export type GitHub_ExternalIdentitySamlAttributes = {
   __typename?: 'GitHub_ExternalIdentitySamlAttributes',
  nameId?: Maybe<Scalars['String']>,
};

export type GitHub_ExternalIdentityScimAttributes = {
   __typename?: 'GitHub_ExternalIdentityScimAttributes',
  username?: Maybe<Scalars['String']>,
};

export type GitHub_FollowerConnection = {
   __typename?: 'GitHub_FollowerConnection',
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_FollowingConnection = {
   __typename?: 'GitHub_FollowingConnection',
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_FollowUserInput = {
  userId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_FollowUserPayload = {
   __typename?: 'GitHub_FollowUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<GitHub_User>,
};

export type GitHub_FundingLink = {
   __typename?: 'GitHub_FundingLink',
  platform: GitHub_FundingPlatform,
  url: Scalars['GitHub_URI'],
};

export enum GitHub_FundingPlatform {
  Github = 'GITHUB',
  Patreon = 'PATREON',
  OpenCollective = 'OPEN_COLLECTIVE',
  KoFi = 'KO_FI',
  Tidelift = 'TIDELIFT',
  CommunityBridge = 'COMMUNITY_BRIDGE',
  Liberapay = 'LIBERAPAY',
  Issuehunt = 'ISSUEHUNT',
  Otechie = 'OTECHIE',
  Custom = 'CUSTOM'
}

export type GitHub_GenericHovercardContext = GitHub_HovercardContext & {
   __typename?: 'GitHub_GenericHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
};

export type GitHub_Gist = GitHub_Node & GitHub_Starrable & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Gist',
  comments: GitHub_GistCommentConnection,
  createdAt: Scalars['GitHub_DateTime'],
  description?: Maybe<Scalars['String']>,
  files?: Maybe<Array<Maybe<GitHub_GistFile>>>,
  forks: GitHub_GistConnection,
  id: Scalars['ID'],
  isFork: Scalars['Boolean'],
  isPublic: Scalars['Boolean'],
  name: Scalars['String'],
  owner?: Maybe<GitHub_RepositoryOwner>,
  pushedAt?: Maybe<Scalars['GitHub_DateTime']>,
  resourcePath: Scalars['GitHub_URI'],
  stargazers: GitHub_StargazerConnection,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  viewerHasStarred: Scalars['Boolean'],
};


export type GitHub_GistCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_GistFilesArgs = {
  limit?: Maybe<Scalars['Int']>,
  oid?: Maybe<Scalars['GitHub_GitObjectID']>
};


export type GitHub_GistForksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_GistOrder>
};


export type GitHub_GistStargazersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_StarOrder>
};

export type GitHub_GistComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & {
   __typename?: 'GitHub_GistComment',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  editor?: Maybe<GitHub_Actor>,
  gist: GitHub_Gist,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  minimizedReason?: Maybe<Scalars['String']>,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  updatedAt: Scalars['GitHub_DateTime'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_GistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_GistCommentConnection = {
   __typename?: 'GitHub_GistCommentConnection',
  edges?: Maybe<Array<Maybe<GitHub_GistCommentEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_GistComment>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_GistCommentEdge = {
   __typename?: 'GitHub_GistCommentEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_GistComment>,
};

export type GitHub_GistConnection = {
   __typename?: 'GitHub_GistConnection',
  edges?: Maybe<Array<Maybe<GitHub_GistEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Gist>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_GistEdge = {
   __typename?: 'GitHub_GistEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Gist>,
};

export type GitHub_GistFile = {
   __typename?: 'GitHub_GistFile',
  encodedName?: Maybe<Scalars['String']>,
  encoding?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  isImage: Scalars['Boolean'],
  isTruncated: Scalars['Boolean'],
  language?: Maybe<GitHub_Language>,
  name?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  text?: Maybe<Scalars['String']>,
};


export type GitHub_GistFileTextArgs = {
  truncate?: Maybe<Scalars['Int']>
};

export type GitHub_GistOrder = {
  field: GitHub_GistOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_GistOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT'
}

export enum GitHub_GistPrivacy {
  Public = 'PUBLIC',
  Secret = 'SECRET',
  All = 'ALL'
}

export type GitHub_GitActor = {
   __typename?: 'GitHub_GitActor',
  avatarUrl: Scalars['GitHub_URI'],
  date?: Maybe<Scalars['GitHub_GitTimestamp']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  user?: Maybe<GitHub_User>,
};


export type GitHub_GitActorAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type GitHub_GitHubMetadata = {
   __typename?: 'GitHub_GitHubMetadata',
  gitHubServicesSha: Scalars['GitHub_GitObjectID'],
  gitIpAddresses?: Maybe<Array<Scalars['String']>>,
  hookIpAddresses?: Maybe<Array<Scalars['String']>>,
  importerIpAddresses?: Maybe<Array<Scalars['String']>>,
  isPasswordAuthenticationVerifiable: Scalars['Boolean'],
  pagesIpAddresses?: Maybe<Array<Scalars['String']>>,
};

export type GitHub_GitObject = {
  abbreviatedOid: Scalars['String'],
  commitResourcePath: Scalars['GitHub_URI'],
  commitUrl: Scalars['GitHub_URI'],
  id: Scalars['ID'],
  oid: Scalars['GitHub_GitObjectID'],
  repository: GitHub_Repository,
};


export type GitHub_GitSignature = {
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer?: Maybe<GitHub_User>,
  state: GitHub_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export enum GitHub_GitSignatureState {
  Valid = 'VALID',
  Invalid = 'INVALID',
  MalformedSig = 'MALFORMED_SIG',
  UnknownKey = 'UNKNOWN_KEY',
  BadEmail = 'BAD_EMAIL',
  UnverifiedEmail = 'UNVERIFIED_EMAIL',
  NoUser = 'NO_USER',
  UnknownSigType = 'UNKNOWN_SIG_TYPE',
  Unsigned = 'UNSIGNED',
  GpgverifyUnavailable = 'GPGVERIFY_UNAVAILABLE',
  GpgverifyError = 'GPGVERIFY_ERROR',
  NotSigningKey = 'NOT_SIGNING_KEY',
  ExpiredKey = 'EXPIRED_KEY',
  OcspPending = 'OCSP_PENDING',
  OcspError = 'OCSP_ERROR',
  BadCert = 'BAD_CERT',
  OcspRevoked = 'OCSP_REVOKED'
}



export type GitHub_GpgSignature = GitHub_GitSignature & {
   __typename?: 'GitHub_GpgSignature',
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  keyId?: Maybe<Scalars['String']>,
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer?: Maybe<GitHub_User>,
  state: GitHub_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export type GitHub_HeadRefDeletedEvent = GitHub_Node & {
   __typename?: 'GitHub_HeadRefDeletedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  headRef?: Maybe<GitHub_Ref>,
  headRefName: Scalars['String'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
};

export type GitHub_HeadRefForcePushedEvent = GitHub_Node & {
   __typename?: 'GitHub_HeadRefForcePushedEvent',
  actor?: Maybe<GitHub_Actor>,
  afterCommit?: Maybe<GitHub_Commit>,
  beforeCommit?: Maybe<GitHub_Commit>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  ref?: Maybe<GitHub_Ref>,
};

export type GitHub_HeadRefRestoredEvent = GitHub_Node & {
   __typename?: 'GitHub_HeadRefRestoredEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
};

export type GitHub_Hovercard = {
   __typename?: 'GitHub_Hovercard',
  contexts: Array<GitHub_HovercardContext>,
};

export type GitHub_HovercardContext = {
  message: Scalars['String'],
  octicon: Scalars['String'],
};


export enum GitHub_IdentityProviderConfigurationState {
  Enforced = 'ENFORCED',
  Configured = 'CONFIGURED',
  Unconfigured = 'UNCONFIGURED'
}

export type GitHub_InviteEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'],
  invitee?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  role?: Maybe<GitHub_EnterpriseAdministratorRole>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_InviteEnterpriseAdminPayload = {
   __typename?: 'GitHub_InviteEnterpriseAdminPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invitation?: Maybe<GitHub_EnterpriseAdministratorInvitation>,
};

export enum GitHub_IpAllowListEnabledSettingValue {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED'
}

export type GitHub_IpAllowListEntry = GitHub_Node & {
   __typename?: 'GitHub_IpAllowListEntry',
  allowListValue: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  isActive: Scalars['Boolean'],
  name?: Maybe<Scalars['String']>,
  owner: GitHub_IpAllowListOwner,
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_IpAllowListEntryConnection = {
   __typename?: 'GitHub_IpAllowListEntryConnection',
  edges?: Maybe<Array<Maybe<GitHub_IpAllowListEntryEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_IpAllowListEntry>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_IpAllowListEntryEdge = {
   __typename?: 'GitHub_IpAllowListEntryEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_IpAllowListEntry>,
};

export type GitHub_IpAllowListEntryOrder = {
  field: GitHub_IpAllowListEntryOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_IpAllowListEntryOrderField {
  CreatedAt = 'CREATED_AT',
  AllowListValue = 'ALLOW_LIST_VALUE'
}

export type GitHub_IpAllowListOwner = GitHub_Enterprise | GitHub_Organization;

export type GitHub_Issue = GitHub_Node & GitHub_Assignable & GitHub_Closable & GitHub_Comment & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Labelable & GitHub_Lockable & GitHub_Reactable & GitHub_RepositoryNode & GitHub_Subscribable & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Issue',
  activeLockReason?: Maybe<GitHub_LockReason>,
  assignees: GitHub_UserConnection,
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  closed: Scalars['Boolean'],
  closedAt?: Maybe<Scalars['GitHub_DateTime']>,
  comments: GitHub_IssueCommentConnection,
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  editor?: Maybe<GitHub_Actor>,
  hovercard: GitHub_Hovercard,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  labels?: Maybe<GitHub_LabelConnection>,
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  locked: Scalars['Boolean'],
  milestone?: Maybe<GitHub_Milestone>,
  number: Scalars['Int'],
  participants: GitHub_UserConnection,
  projectCards: GitHub_ProjectCardConnection,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  state: GitHub_IssueState,
  timeline: GitHub_IssueTimelineConnection,
  timelineItems: GitHub_IssueTimelineItemsConnection,
  title: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanReact: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
};


export type GitHub_IssueAssigneesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_IssueCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_IssueHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>
};


export type GitHub_IssueLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_IssueParticipantsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_IssueProjectCardsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>
};


export type GitHub_IssueReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_IssueTimelineArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_IssueTimelineItemsArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>,
  skip?: Maybe<Scalars['Int']>,
  itemTypes?: Maybe<Array<GitHub_IssueTimelineItemsItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_IssueUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_IssueComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
   __typename?: 'GitHub_IssueComment',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  issue: GitHub_Issue,
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  minimizedReason?: Maybe<Scalars['String']>,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_IssueCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_IssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_IssueCommentConnection = {
   __typename?: 'GitHub_IssueCommentConnection',
  edges?: Maybe<Array<Maybe<GitHub_IssueCommentEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_IssueComment>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_IssueCommentEdge = {
   __typename?: 'GitHub_IssueCommentEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_IssueComment>,
};

export type GitHub_IssueConnection = {
   __typename?: 'GitHub_IssueConnection',
  edges?: Maybe<Array<Maybe<GitHub_IssueEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Issue>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_IssueContributionsByRepository = {
   __typename?: 'GitHub_IssueContributionsByRepository',
  contributions: GitHub_CreatedIssueContributionConnection,
  repository: GitHub_Repository,
};


export type GitHub_IssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};

export type GitHub_IssueEdge = {
   __typename?: 'GitHub_IssueEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Issue>,
};

export type GitHub_IssueFilters = {
  assignee?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  labels?: Maybe<Array<Scalars['String']>>,
  mentioned?: Maybe<Scalars['String']>,
  milestone?: Maybe<Scalars['String']>,
  since?: Maybe<Scalars['GitHub_DateTime']>,
  states?: Maybe<Array<GitHub_IssueState>>,
  viewerSubscribed?: Maybe<Scalars['Boolean']>,
};

export type GitHub_IssueOrder = {
  field: GitHub_IssueOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_IssueOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Comments = 'COMMENTS'
}

export type GitHub_IssueOrPullRequest = GitHub_Issue | GitHub_PullRequest;

export enum GitHub_IssueState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type GitHub_IssueTimelineConnection = {
   __typename?: 'GitHub_IssueTimelineConnection',
  edges?: Maybe<Array<Maybe<GitHub_IssueTimelineItemEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_IssueTimelineItem>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_IssueTimelineItem = GitHub_AssignedEvent | GitHub_ClosedEvent | GitHub_Commit | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MilestonedEvent | GitHub_ReferencedEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_SubscribedEvent | GitHub_TransferredEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

export type GitHub_IssueTimelineItemEdge = {
   __typename?: 'GitHub_IssueTimelineItemEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_IssueTimelineItem>,
};

export type GitHub_IssueTimelineItems = GitHub_AddedToProjectEvent | GitHub_AssignedEvent | GitHub_ClosedEvent | GitHub_CommentDeletedEvent | GitHub_ConnectedEvent | GitHub_ConvertedNoteToIssueEvent | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_DisconnectedEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MarkedAsDuplicateEvent | GitHub_MentionedEvent | GitHub_MilestonedEvent | GitHub_MovedColumnsInProjectEvent | GitHub_PinnedEvent | GitHub_ReferencedEvent | GitHub_RemovedFromProjectEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_SubscribedEvent | GitHub_TransferredEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnmarkedAsDuplicateEvent | GitHub_UnpinnedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

export type GitHub_IssueTimelineItemsConnection = {
   __typename?: 'GitHub_IssueTimelineItemsConnection',
  edges?: Maybe<Array<Maybe<GitHub_IssueTimelineItemsEdge>>>,
  filteredCount: Scalars['Int'],
  nodes?: Maybe<Array<Maybe<GitHub_IssueTimelineItems>>>,
  pageCount: Scalars['Int'],
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_IssueTimelineItemsEdge = {
   __typename?: 'GitHub_IssueTimelineItemsEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_IssueTimelineItems>,
};

export enum GitHub_IssueTimelineItemsItemType {
  IssueComment = 'ISSUE_COMMENT',
  CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent = 'ASSIGNED_EVENT',
  ClosedEvent = 'CLOSED_EVENT',
  CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
  ConnectedEvent = 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent = 'DEMILESTONED_EVENT',
  DisconnectedEvent = 'DISCONNECTED_EVENT',
  LabeledEvent = 'LABELED_EVENT',
  LockedEvent = 'LOCKED_EVENT',
  MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent = 'MENTIONED_EVENT',
  MilestonedEvent = 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent = 'PINNED_EVENT',
  ReferencedEvent = 'REFERENCED_EVENT',
  RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
  ReopenedEvent = 'REOPENED_EVENT',
  SubscribedEvent = 'SUBSCRIBED_EVENT',
  TransferredEvent = 'TRANSFERRED_EVENT',
  UnassignedEvent = 'UNASSIGNED_EVENT',
  UnlabeledEvent = 'UNLABELED_EVENT',
  UnlockedEvent = 'UNLOCKED_EVENT',
  UserBlockedEvent = 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent = 'UNPINNED_EVENT',
  UnsubscribedEvent = 'UNSUBSCRIBED_EVENT'
}

export type GitHub_JoinedGitHubContribution = GitHub_Contribution & {
   __typename?: 'GitHub_JoinedGitHubContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_Label = GitHub_Node & {
   __typename?: 'GitHub_Label',
  color: Scalars['String'],
  createdAt?: Maybe<Scalars['GitHub_DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isDefault: Scalars['Boolean'],
  issues: GitHub_IssueConnection,
  name: Scalars['String'],
  pullRequests: GitHub_PullRequestConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  updatedAt?: Maybe<Scalars['GitHub_DateTime']>,
  url: Scalars['GitHub_URI'],
};


export type GitHub_LabelIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>,
  labels?: Maybe<Array<Scalars['String']>>,
  states?: Maybe<Array<GitHub_IssueState>>,
  filterBy?: Maybe<GitHub_IssueFilters>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_LabelPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>,
  labels?: Maybe<Array<Scalars['String']>>,
  headRefName?: Maybe<Scalars['String']>,
  baseRefName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_IssueOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_Labelable = {
  labels?: Maybe<GitHub_LabelConnection>,
};


export type GitHub_LabelableLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_LabelConnection = {
   __typename?: 'GitHub_LabelConnection',
  edges?: Maybe<Array<Maybe<GitHub_LabelEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Label>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_LabeledEvent = GitHub_Node & {
   __typename?: 'GitHub_LabeledEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  label: GitHub_Label,
  labelable: GitHub_Labelable,
};

export type GitHub_LabelEdge = {
   __typename?: 'GitHub_LabelEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Label>,
};

export type GitHub_LabelOrder = {
  field: GitHub_LabelOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_LabelOrderField {
  Name = 'NAME',
  CreatedAt = 'CREATED_AT'
}

export type GitHub_Language = GitHub_Node & {
   __typename?: 'GitHub_Language',
  color?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type GitHub_LanguageConnection = {
   __typename?: 'GitHub_LanguageConnection',
  edges?: Maybe<Array<Maybe<GitHub_LanguageEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Language>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
  totalSize: Scalars['Int'],
};

export type GitHub_LanguageEdge = {
   __typename?: 'GitHub_LanguageEdge',
  cursor: Scalars['String'],
  node: GitHub_Language,
  size: Scalars['Int'],
};

export type GitHub_LanguageOrder = {
  field: GitHub_LanguageOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_LanguageOrderField {
  Size = 'SIZE'
}

export type GitHub_License = GitHub_Node & {
   __typename?: 'GitHub_License',
  body: Scalars['String'],
  conditions: Array<Maybe<GitHub_LicenseRule>>,
  description?: Maybe<Scalars['String']>,
  featured: Scalars['Boolean'],
  hidden: Scalars['Boolean'],
  id: Scalars['ID'],
  implementation?: Maybe<Scalars['String']>,
  key: Scalars['String'],
  limitations: Array<Maybe<GitHub_LicenseRule>>,
  name: Scalars['String'],
  nickname?: Maybe<Scalars['String']>,
  permissions: Array<Maybe<GitHub_LicenseRule>>,
  pseudoLicense: Scalars['Boolean'],
  spdxId?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_LicenseRule = {
   __typename?: 'GitHub_LicenseRule',
  description: Scalars['String'],
  key: Scalars['String'],
  label: Scalars['String'],
};

export type GitHub_LinkRepositoryToProjectInput = {
  projectId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_LinkRepositoryToProjectPayload = {
   __typename?: 'GitHub_LinkRepositoryToProjectPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  project?: Maybe<GitHub_Project>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_Lockable = {
  activeLockReason?: Maybe<GitHub_LockReason>,
  locked: Scalars['Boolean'],
};

export type GitHub_LockedEvent = GitHub_Node & {
   __typename?: 'GitHub_LockedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  lockReason?: Maybe<GitHub_LockReason>,
  lockable: GitHub_Lockable,
};

export type GitHub_LockLockableInput = {
  lockableId: Scalars['ID'],
  lockReason?: Maybe<GitHub_LockReason>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_LockLockablePayload = {
   __typename?: 'GitHub_LockLockablePayload',
  actor?: Maybe<GitHub_Actor>,
  clientMutationId?: Maybe<Scalars['String']>,
  lockedRecord?: Maybe<GitHub_Lockable>,
};

export enum GitHub_LockReason {
  OffTopic = 'OFF_TOPIC',
  TooHeated = 'TOO_HEATED',
  Resolved = 'RESOLVED',
  Spam = 'SPAM'
}

export type GitHub_Mannequin = GitHub_Node & GitHub_Actor & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Mannequin',
  avatarUrl: Scalars['GitHub_URI'],
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  login: Scalars['String'],
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_MannequinAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type GitHub_MarkedAsDuplicateEvent = GitHub_Node & {
   __typename?: 'GitHub_MarkedAsDuplicateEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
};

export type GitHub_MarketplaceCategory = GitHub_Node & {
   __typename?: 'GitHub_MarketplaceCategory',
  description?: Maybe<Scalars['String']>,
  howItWorks?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  primaryListingCount: Scalars['Int'],
  resourcePath: Scalars['GitHub_URI'],
  secondaryListingCount: Scalars['Int'],
  slug: Scalars['String'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_MarketplaceListing = GitHub_Node & {
   __typename?: 'GitHub_MarketplaceListing',
  app?: Maybe<GitHub_App>,
  companyUrl?: Maybe<Scalars['GitHub_URI']>,
  configurationResourcePath: Scalars['GitHub_URI'],
  configurationUrl: Scalars['GitHub_URI'],
  documentationUrl?: Maybe<Scalars['GitHub_URI']>,
  extendedDescription?: Maybe<Scalars['String']>,
  extendedDescriptionHTML: Scalars['GitHub_HTML'],
  fullDescription: Scalars['String'],
  fullDescriptionHTML: Scalars['GitHub_HTML'],
  hasApprovalBeenRequested: Scalars['Boolean'],
  hasPublishedFreeTrialPlans: Scalars['Boolean'],
  hasTermsOfService: Scalars['Boolean'],
  howItWorks?: Maybe<Scalars['String']>,
  howItWorksHTML: Scalars['GitHub_HTML'],
  id: Scalars['ID'],
  installationUrl?: Maybe<Scalars['GitHub_URI']>,
  installedForViewer: Scalars['Boolean'],
  isApproved: Scalars['Boolean'],
  isArchived: Scalars['Boolean'],
  isDelisted: Scalars['Boolean'],
  isDraft: Scalars['Boolean'],
  isPaid: Scalars['Boolean'],
  isPublic: Scalars['Boolean'],
  isRejected: Scalars['Boolean'],
  isUnverified: Scalars['Boolean'],
  isUnverifiedPending: Scalars['Boolean'],
  isVerificationPendingFromDraft: Scalars['Boolean'],
  isVerificationPendingFromUnverified: Scalars['Boolean'],
  isVerified: Scalars['Boolean'],
  logoBackgroundColor: Scalars['String'],
  logoUrl?: Maybe<Scalars['GitHub_URI']>,
  name: Scalars['String'],
  normalizedShortDescription: Scalars['String'],
  pricingUrl?: Maybe<Scalars['GitHub_URI']>,
  primaryCategory: GitHub_MarketplaceCategory,
  privacyPolicyUrl: Scalars['GitHub_URI'],
  resourcePath: Scalars['GitHub_URI'],
  screenshotUrls: Array<Maybe<Scalars['String']>>,
  secondaryCategory?: Maybe<GitHub_MarketplaceCategory>,
  shortDescription: Scalars['String'],
  slug: Scalars['String'],
  statusUrl?: Maybe<Scalars['GitHub_URI']>,
  supportEmail?: Maybe<Scalars['String']>,
  supportUrl: Scalars['GitHub_URI'],
  termsOfServiceUrl?: Maybe<Scalars['GitHub_URI']>,
  url: Scalars['GitHub_URI'],
  viewerCanAddPlans: Scalars['Boolean'],
  viewerCanApprove: Scalars['Boolean'],
  viewerCanDelist: Scalars['Boolean'],
  viewerCanEdit: Scalars['Boolean'],
  viewerCanEditCategories: Scalars['Boolean'],
  viewerCanEditPlans: Scalars['Boolean'],
  viewerCanRedraft: Scalars['Boolean'],
  viewerCanReject: Scalars['Boolean'],
  viewerCanRequestApproval: Scalars['Boolean'],
  viewerHasPurchased: Scalars['Boolean'],
  viewerHasPurchasedForAllOrganizations: Scalars['Boolean'],
  viewerIsListingAdmin: Scalars['Boolean'],
};


export type GitHub_MarketplaceListingLogoUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export type GitHub_MarketplaceListingConnection = {
   __typename?: 'GitHub_MarketplaceListingConnection',
  edges?: Maybe<Array<Maybe<GitHub_MarketplaceListingEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_MarketplaceListing>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_MarketplaceListingEdge = {
   __typename?: 'GitHub_MarketplaceListingEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_MarketplaceListing>,
};

export type GitHub_MarkPullRequestReadyForReviewInput = {
  pullRequestId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MarkPullRequestReadyForReviewPayload = {
   __typename?: 'GitHub_MarkPullRequestReadyForReviewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
};

export type GitHub_MembersCanDeleteReposClearAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_MembersCanDeleteReposClearAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_MembersCanDeleteReposDisableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_MembersCanDeleteReposDisableAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_MembersCanDeleteReposEnableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_MembersCanDeleteReposEnableAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_MemberStatusable = {
  memberStatuses: GitHub_UserStatusConnection,
};


export type GitHub_MemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_UserStatusOrder>
};

export type GitHub_MentionedEvent = GitHub_Node & {
   __typename?: 'GitHub_MentionedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export enum GitHub_MergeableState {
  Mergeable = 'MERGEABLE',
  Conflicting = 'CONFLICTING',
  Unknown = 'UNKNOWN'
}

export type GitHub_MergeBranchInput = {
  repositoryId: Scalars['ID'],
  base: Scalars['String'],
  head: Scalars['String'],
  commitMessage?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MergeBranchPayload = {
   __typename?: 'GitHub_MergeBranchPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mergeCommit?: Maybe<GitHub_Commit>,
};

export type GitHub_MergedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_MergedEvent',
  actor?: Maybe<GitHub_Actor>,
  commit?: Maybe<GitHub_Commit>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  mergeRef?: Maybe<GitHub_Ref>,
  mergeRefName: Scalars['String'],
  pullRequest: GitHub_PullRequest,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_MergePullRequestInput = {
  pullRequestId: Scalars['ID'],
  commitHeadline?: Maybe<Scalars['String']>,
  commitBody?: Maybe<Scalars['String']>,
  expectedHeadOid?: Maybe<Scalars['GitHub_GitObjectID']>,
  mergeMethod?: Maybe<GitHub_PullRequestMergeMethod>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MergePullRequestPayload = {
   __typename?: 'GitHub_MergePullRequestPayload',
  actor?: Maybe<GitHub_Actor>,
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
};

export type GitHub_Milestone = GitHub_Node & GitHub_Closable & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Milestone',
  closed: Scalars['Boolean'],
  closedAt?: Maybe<Scalars['GitHub_DateTime']>,
  createdAt: Scalars['GitHub_DateTime'],
  creator?: Maybe<GitHub_Actor>,
  description?: Maybe<Scalars['String']>,
  dueOn?: Maybe<Scalars['GitHub_DateTime']>,
  id: Scalars['ID'],
  issuePrioritiesDebug: Scalars['String'],
  issues: GitHub_IssueConnection,
  number: Scalars['Int'],
  pullRequests: GitHub_PullRequestConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  state: GitHub_MilestoneState,
  title: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_MilestoneIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>,
  labels?: Maybe<Array<Scalars['String']>>,
  states?: Maybe<Array<GitHub_IssueState>>,
  filterBy?: Maybe<GitHub_IssueFilters>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_MilestonePullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>,
  labels?: Maybe<Array<Scalars['String']>>,
  headRefName?: Maybe<Scalars['String']>,
  baseRefName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_IssueOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_MilestoneConnection = {
   __typename?: 'GitHub_MilestoneConnection',
  edges?: Maybe<Array<Maybe<GitHub_MilestoneEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Milestone>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_MilestonedEvent = GitHub_Node & {
   __typename?: 'GitHub_MilestonedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  milestoneTitle: Scalars['String'],
  subject: GitHub_MilestoneItem,
};

export type GitHub_MilestoneEdge = {
   __typename?: 'GitHub_MilestoneEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Milestone>,
};

export type GitHub_MilestoneItem = GitHub_Issue | GitHub_PullRequest;

export type GitHub_MilestoneOrder = {
  field: GitHub_MilestoneOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_MilestoneOrderField {
  DueDate = 'DUE_DATE',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Number = 'NUMBER'
}

export enum GitHub_MilestoneState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type GitHub_Minimizable = {
  isMinimized: Scalars['Boolean'],
  minimizedReason?: Maybe<Scalars['String']>,
  viewerCanMinimize: Scalars['Boolean'],
};

export type GitHub_MinimizeCommentInput = {
  subjectId: Scalars['ID'],
  classifier: GitHub_ReportedContentClassifiers,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MinimizeCommentPayload = {
   __typename?: 'GitHub_MinimizeCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  minimizedComment?: Maybe<GitHub_Minimizable>,
};

export type GitHub_MovedColumnsInProjectEvent = GitHub_Node & {
   __typename?: 'GitHub_MovedColumnsInProjectEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type GitHub_MoveProjectCardInput = {
  cardId: Scalars['ID'],
  columnId: Scalars['ID'],
  afterCardId?: Maybe<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MoveProjectCardPayload = {
   __typename?: 'GitHub_MoveProjectCardPayload',
  cardEdge?: Maybe<GitHub_ProjectCardEdge>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MoveProjectColumnInput = {
  columnId: Scalars['ID'],
  afterColumnId?: Maybe<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_MoveProjectColumnPayload = {
   __typename?: 'GitHub_MoveProjectColumnPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  columnEdge?: Maybe<GitHub_ProjectColumnEdge>,
};

export type GitHub_Node = {
  id: Scalars['ID'],
};

export type GitHub_OauthApplicationAuditEntryData = {
  oauthApplicationName?: Maybe<Scalars['String']>,
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OauthApplicationCreateAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OauthApplicationCreateAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  applicationUrl?: Maybe<Scalars['GitHub_URI']>,
  callbackUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName?: Maybe<Scalars['String']>,
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  rateLimit?: Maybe<Scalars['Int']>,
  state?: Maybe<GitHub_OauthApplicationCreateAuditEntryState>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OauthApplicationCreateAuditEntryState {
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  PendingDeletion = 'PENDING_DELETION'
}

export enum GitHub_OperationType {
  Access = 'ACCESS',
  Authentication = 'AUTHENTICATION',
  Create = 'CREATE',
  Modify = 'MODIFY',
  Remove = 'REMOVE',
  Restore = 'RESTORE',
  Transfer = 'TRANSFER'
}

export enum GitHub_OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GitHub_OrgAddBillingManagerAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgAddBillingManagerAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  invitationEmail?: Maybe<Scalars['String']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgAddMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgAddMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  permission?: Maybe<GitHub_OrgAddMemberAuditEntryPermission>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgAddMemberAuditEntryPermission {
  Read = 'READ',
  Admin = 'ADMIN'
}

export type GitHub_Organization = GitHub_Node & GitHub_Actor & GitHub_RegistryPackageOwner & GitHub_RegistryPackageSearch & GitHub_ProjectOwner & GitHub_RepositoryOwner & GitHub_UniformResourceLocatable & GitHub_MemberStatusable & GitHub_ProfileOwner & GitHub_Sponsorable & {
   __typename?: 'GitHub_Organization',
  anyPinnableItems: Scalars['Boolean'],
  auditLog: GitHub_OrganizationAuditEntryConnection,
  avatarUrl: Scalars['GitHub_URI'],
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  descriptionHTML?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isVerified: Scalars['Boolean'],
  itemShowcase: GitHub_ProfileItemShowcase,
  location?: Maybe<Scalars['String']>,
  login: Scalars['String'],
  memberStatuses: GitHub_UserStatusConnection,
  membersWithRole: GitHub_OrganizationMemberConnection,
  name?: Maybe<Scalars['String']>,
  newTeamResourcePath: Scalars['GitHub_URI'],
  newTeamUrl: Scalars['GitHub_URI'],
  organizationBillingEmail?: Maybe<Scalars['String']>,
  pendingMembers: GitHub_UserConnection,
  pinnableItems: GitHub_PinnableItemConnection,
  pinnedItems: GitHub_PinnableItemConnection,
  pinnedItemsRemaining: Scalars['Int'],
  pinnedRepositories: GitHub_RepositoryConnection,
  project?: Maybe<GitHub_Project>,
  projects: GitHub_ProjectConnection,
  projectsResourcePath: Scalars['GitHub_URI'],
  projectsUrl: Scalars['GitHub_URI'],
  registryPackages: GitHub_RegistryPackageConnection,
  registryPackagesForQuery: GitHub_RegistryPackageConnection,
  repositories: GitHub_RepositoryConnection,
  repository?: Maybe<GitHub_Repository>,
  requiresTwoFactorAuthentication?: Maybe<Scalars['Boolean']>,
  resourcePath: Scalars['GitHub_URI'],
  samlIdentityProvider?: Maybe<GitHub_OrganizationIdentityProvider>,
  sponsorsListing?: Maybe<GitHub_SponsorsListing>,
  sponsorshipsAsMaintainer: GitHub_SponsorshipConnection,
  sponsorshipsAsSponsor: GitHub_SponsorshipConnection,
  team?: Maybe<GitHub_Team>,
  teams: GitHub_TeamConnection,
  teamsResourcePath: Scalars['GitHub_URI'],
  teamsUrl: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  viewerCanAdminister: Scalars['Boolean'],
  viewerCanChangePinnedItems: Scalars['Boolean'],
  viewerCanCreateProjects: Scalars['Boolean'],
  viewerCanCreateRepositories: Scalars['Boolean'],
  viewerCanCreateTeams: Scalars['Boolean'],
  viewerIsAMember: Scalars['Boolean'],
  websiteUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_OrganizationAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>
};


export type GitHub_OrganizationAuditLogArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_AuditLogOrder>
};


export type GitHub_OrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_UserStatusOrder>
};


export type GitHub_OrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationPendingMembersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationProjectArgs = {
  number: Scalars['Int']
};


export type GitHub_OrganizationProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>,
  search?: Maybe<Scalars['String']>,
  states?: Maybe<Array<GitHub_ProjectState>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_OrganizationRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId?: Maybe<Scalars['ID']>,
  packageType?: Maybe<GitHub_RegistryPackageType>,
  registryPackageType?: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};


export type GitHub_OrganizationRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  packageType?: Maybe<GitHub_RegistryPackageType>
};


export type GitHub_OrganizationRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  isFork?: Maybe<Scalars['Boolean']>
};


export type GitHub_OrganizationRepositoryArgs = {
  name: Scalars['String']
};


export type GitHub_OrganizationSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};


export type GitHub_OrganizationSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};


export type GitHub_OrganizationTeamArgs = {
  slug: Scalars['String']
};


export type GitHub_OrganizationTeamsArgs = {
  privacy?: Maybe<GitHub_TeamPrivacy>,
  role?: Maybe<GitHub_TeamRole>,
  query?: Maybe<Scalars['String']>,
  userLogins?: Maybe<Array<Scalars['String']>>,
  orderBy?: Maybe<GitHub_TeamOrder>,
  ldapMapped?: Maybe<Scalars['Boolean']>,
  rootTeamsOnly?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_OrganizationAuditEntry = GitHub_MembersCanDeleteReposClearAuditEntry | GitHub_MembersCanDeleteReposDisableAuditEntry | GitHub_MembersCanDeleteReposEnableAuditEntry | GitHub_OauthApplicationCreateAuditEntry | GitHub_OrgAddBillingManagerAuditEntry | GitHub_OrgAddMemberAuditEntry | GitHub_OrgBlockUserAuditEntry | GitHub_OrgConfigDisableCollaboratorsOnlyAuditEntry | GitHub_OrgConfigEnableCollaboratorsOnlyAuditEntry | GitHub_OrgCreateAuditEntry | GitHub_OrgDisableOauthAppRestrictionsAuditEntry | GitHub_OrgDisableSamlAuditEntry | GitHub_OrgDisableTwoFactorRequirementAuditEntry | GitHub_OrgEnableOauthAppRestrictionsAuditEntry | GitHub_OrgEnableSamlAuditEntry | GitHub_OrgEnableTwoFactorRequirementAuditEntry | GitHub_OrgInviteMemberAuditEntry | GitHub_OrgInviteToBusinessAuditEntry | GitHub_OrgOauthAppAccessApprovedAuditEntry | GitHub_OrgOauthAppAccessDeniedAuditEntry | GitHub_OrgOauthAppAccessRequestedAuditEntry | GitHub_OrgRemoveBillingManagerAuditEntry | GitHub_OrgRemoveMemberAuditEntry | GitHub_OrgRemoveOutsideCollaboratorAuditEntry | GitHub_OrgRestoreMemberAuditEntry | GitHub_OrgUnblockUserAuditEntry | GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntry | GitHub_OrgUpdateMemberAuditEntry | GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntry | GitHub_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | GitHub_PrivateRepositoryForkingDisableAuditEntry | GitHub_PrivateRepositoryForkingEnableAuditEntry | GitHub_RepoAccessAuditEntry | GitHub_RepoAddMemberAuditEntry | GitHub_RepoAddTopicAuditEntry | GitHub_RepoArchivedAuditEntry | GitHub_RepoChangeMergeSettingAuditEntry | GitHub_RepoConfigDisableAnonymousGitAccessAuditEntry | GitHub_RepoConfigDisableCollaboratorsOnlyAuditEntry | GitHub_RepoConfigDisableContributorsOnlyAuditEntry | GitHub_RepoConfigDisableSockpuppetDisallowedAuditEntry | GitHub_RepoConfigEnableAnonymousGitAccessAuditEntry | GitHub_RepoConfigEnableCollaboratorsOnlyAuditEntry | GitHub_RepoConfigEnableContributorsOnlyAuditEntry | GitHub_RepoConfigEnableSockpuppetDisallowedAuditEntry | GitHub_RepoConfigLockAnonymousGitAccessAuditEntry | GitHub_RepoConfigUnlockAnonymousGitAccessAuditEntry | GitHub_RepoCreateAuditEntry | GitHub_RepoDestroyAuditEntry | GitHub_RepoRemoveMemberAuditEntry | GitHub_RepoRemoveTopicAuditEntry | GitHub_RepositoryVisibilityChangeDisableAuditEntry | GitHub_RepositoryVisibilityChangeEnableAuditEntry | GitHub_TeamAddMemberAuditEntry | GitHub_TeamAddRepositoryAuditEntry | GitHub_TeamChangeParentTeamAuditEntry | GitHub_TeamRemoveMemberAuditEntry | GitHub_TeamRemoveRepositoryAuditEntry;

export type GitHub_OrganizationAuditEntryConnection = {
   __typename?: 'GitHub_OrganizationAuditEntryConnection',
  edges?: Maybe<Array<Maybe<GitHub_OrganizationAuditEntryEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationAuditEntry>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_OrganizationAuditEntryData = {
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrganizationAuditEntryEdge = {
   __typename?: 'GitHub_OrganizationAuditEntryEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_OrganizationAuditEntry>,
};

export type GitHub_OrganizationConnection = {
   __typename?: 'GitHub_OrganizationConnection',
  edges?: Maybe<Array<Maybe<GitHub_OrganizationEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Organization>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_OrganizationEdge = {
   __typename?: 'GitHub_OrganizationEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Organization>,
};

export type GitHub_OrganizationIdentityProvider = GitHub_Node & {
   __typename?: 'GitHub_OrganizationIdentityProvider',
  digestMethod?: Maybe<Scalars['GitHub_URI']>,
  externalIdentities: GitHub_ExternalIdentityConnection,
  id: Scalars['ID'],
  idpCertificate?: Maybe<Scalars['GitHub_X509Certificate']>,
  issuer?: Maybe<Scalars['String']>,
  organization?: Maybe<GitHub_Organization>,
  signatureMethod?: Maybe<Scalars['GitHub_URI']>,
  ssoUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_OrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_OrganizationInvitation = GitHub_Node & {
   __typename?: 'GitHub_OrganizationInvitation',
  createdAt: Scalars['GitHub_DateTime'],
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  invitationType: GitHub_OrganizationInvitationType,
  invitee?: Maybe<GitHub_User>,
  inviter: GitHub_User,
  organization: GitHub_Organization,
  role: GitHub_OrganizationInvitationRole,
};

export type GitHub_OrganizationInvitationConnection = {
   __typename?: 'GitHub_OrganizationInvitationConnection',
  edges?: Maybe<Array<Maybe<GitHub_OrganizationInvitationEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_OrganizationInvitation>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_OrganizationInvitationEdge = {
   __typename?: 'GitHub_OrganizationInvitationEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_OrganizationInvitation>,
};

export enum GitHub_OrganizationInvitationRole {
  DirectMember = 'DIRECT_MEMBER',
  Admin = 'ADMIN',
  BillingManager = 'BILLING_MANAGER',
  Reinstate = 'REINSTATE'
}

export enum GitHub_OrganizationInvitationType {
  User = 'USER',
  Email = 'EMAIL'
}

export type GitHub_OrganizationMemberConnection = {
   __typename?: 'GitHub_OrganizationMemberConnection',
  edges?: Maybe<Array<Maybe<GitHub_OrganizationMemberEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_OrganizationMemberEdge = {
   __typename?: 'GitHub_OrganizationMemberEdge',
  cursor: Scalars['String'],
  hasTwoFactorEnabled?: Maybe<Scalars['Boolean']>,
  node?: Maybe<GitHub_User>,
  role?: Maybe<GitHub_OrganizationMemberRole>,
};

export enum GitHub_OrganizationMemberRole {
  Member = 'MEMBER',
  Admin = 'ADMIN'
}

export enum GitHub_OrganizationMembersCanCreateRepositoriesSettingValue {
  All = 'ALL',
  Private = 'PRIVATE',
  Disabled = 'DISABLED'
}

export type GitHub_OrganizationOrder = {
  field: GitHub_OrganizationOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_OrganizationOrderField {
  CreatedAt = 'CREATED_AT',
  Login = 'LOGIN'
}

export type GitHub_OrganizationsHovercardContext = GitHub_HovercardContext & {
   __typename?: 'GitHub_OrganizationsHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  relevantOrganizations: GitHub_OrganizationConnection,
  totalOrganizationCount: Scalars['Int'],
};


export type GitHub_OrganizationsHovercardContextRelevantOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_OrganizationTeamsHovercardContext = GitHub_HovercardContext & {
   __typename?: 'GitHub_OrganizationTeamsHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  relevantTeams: GitHub_TeamConnection,
  teamsResourcePath: Scalars['GitHub_URI'],
  teamsUrl: Scalars['GitHub_URI'],
  totalTeamCount: Scalars['Int'],
};


export type GitHub_OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_OrgBlockUserAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgBlockUserAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  blockedUser?: Maybe<GitHub_User>,
  blockedUserName?: Maybe<Scalars['String']>,
  blockedUserResourcePath?: Maybe<Scalars['GitHub_URI']>,
  blockedUserUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgConfigDisableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgConfigDisableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgConfigEnableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgConfigEnableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgCreateAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgCreateAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  billingPlan?: Maybe<GitHub_OrgCreateAuditEntryBillingPlan>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgCreateAuditEntryBillingPlan {
  Free = 'FREE',
  Business = 'BUSINESS',
  BusinessPlus = 'BUSINESS_PLUS',
  Unlimited = 'UNLIMITED',
  TieredPerSeat = 'TIERED_PER_SEAT'
}

export type GitHub_OrgDisableOauthAppRestrictionsAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgDisableOauthAppRestrictionsAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgDisableSamlAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgDisableSamlAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  digestMethodUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  issuerUrl?: Maybe<Scalars['GitHub_URI']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  signatureMethodUrl?: Maybe<Scalars['GitHub_URI']>,
  singleSignOnUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgDisableTwoFactorRequirementAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgDisableTwoFactorRequirementAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgEnableOauthAppRestrictionsAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgEnableOauthAppRestrictionsAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgEnableSamlAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgEnableSamlAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  digestMethodUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  issuerUrl?: Maybe<Scalars['GitHub_URI']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  signatureMethodUrl?: Maybe<Scalars['GitHub_URI']>,
  singleSignOnUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgEnableTwoFactorRequirementAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgEnableTwoFactorRequirementAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgInviteMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgInviteMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationInvitation?: Maybe<GitHub_OrganizationInvitation>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgInviteToBusinessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgInviteToBusinessAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgOauthAppAccessApprovedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgOauthAppAccessApprovedAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName?: Maybe<Scalars['String']>,
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgOauthAppAccessDeniedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgOauthAppAccessDeniedAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName?: Maybe<Scalars['String']>,
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgOauthAppAccessRequestedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OauthApplicationAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgOauthAppAccessRequestedAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  oauthApplicationName?: Maybe<Scalars['String']>,
  oauthApplicationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  oauthApplicationUrl?: Maybe<Scalars['GitHub_URI']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgRemoveBillingManagerAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgRemoveBillingManagerAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  reason?: Maybe<GitHub_OrgRemoveBillingManagerAuditEntryReason>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgRemoveBillingManagerAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export type GitHub_OrgRemoveMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgRemoveMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  membershipTypes?: Maybe<Array<GitHub_OrgRemoveMemberAuditEntryMembershipType>>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  reason?: Maybe<GitHub_OrgRemoveMemberAuditEntryReason>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgRemoveMemberAuditEntryMembershipType {
  DirectMember = 'DIRECT_MEMBER',
  Admin = 'ADMIN',
  BillingManager = 'BILLING_MANAGER',
  Unaffiliated = 'UNAFFILIATED',
  OutsideCollaborator = 'OUTSIDE_COLLABORATOR'
}

export enum GitHub_OrgRemoveMemberAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

export type GitHub_OrgRemoveOutsideCollaboratorAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgRemoveOutsideCollaboratorAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  membershipTypes?: Maybe<Array<GitHub_OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  reason?: Maybe<GitHub_OrgRemoveOutsideCollaboratorAuditEntryReason>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  OutsideCollaborator = 'OUTSIDE_COLLABORATOR',
  Unaffiliated = 'UNAFFILIATED',
  BillingManager = 'BILLING_MANAGER'
}

export enum GitHub_OrgRemoveOutsideCollaboratorAuditEntryReason {
  TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING'
}

export type GitHub_OrgRestoreMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgRestoreMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  restoredCustomEmailRoutingsCount?: Maybe<Scalars['Int']>,
  restoredIssueAssignmentsCount?: Maybe<Scalars['Int']>,
  restoredMemberships?: Maybe<Array<GitHub_OrgRestoreMemberAuditEntryMembership>>,
  restoredMembershipsCount?: Maybe<Scalars['Int']>,
  restoredRepositoriesCount?: Maybe<Scalars['Int']>,
  restoredRepositoryStarsCount?: Maybe<Scalars['Int']>,
  restoredRepositoryWatchesCount?: Maybe<Scalars['Int']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgRestoreMemberAuditEntryMembership = GitHub_OrgRestoreMemberMembershipOrganizationAuditEntryData | GitHub_OrgRestoreMemberMembershipRepositoryAuditEntryData | GitHub_OrgRestoreMemberMembershipTeamAuditEntryData;

export type GitHub_OrgRestoreMemberMembershipOrganizationAuditEntryData = GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgRestoreMemberMembershipOrganizationAuditEntryData',
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgRestoreMemberMembershipRepositoryAuditEntryData = GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_OrgRestoreMemberMembershipRepositoryAuditEntryData',
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgRestoreMemberMembershipTeamAuditEntryData = GitHub_TeamAuditEntryData & {
   __typename?: 'GitHub_OrgRestoreMemberMembershipTeamAuditEntryData',
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgUnblockUserAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgUnblockUserAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  blockedUser?: Maybe<GitHub_User>,
  blockedUserName?: Maybe<Scalars['String']>,
  blockedUserResourcePath?: Maybe<Scalars['GitHub_URI']>,
  blockedUserUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  permission?: Maybe<GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>,
  permissionWas?: Maybe<GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  Read = 'READ',
  Write = 'WRITE',
  Admin = 'ADMIN',
  None = 'NONE'
}

export type GitHub_OrgUpdateMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgUpdateMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  permission?: Maybe<GitHub_OrgUpdateMemberAuditEntryPermission>,
  permissionWas?: Maybe<GitHub_OrgUpdateMemberAuditEntryPermission>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_OrgUpdateMemberAuditEntryPermission {
  Read = 'READ',
  Admin = 'ADMIN'
}

export type GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  canCreateRepositories?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>,
};

export enum GitHub_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  All = 'ALL',
  Public = 'PUBLIC'
}

export type GitHub_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  canInviteOutsideCollaboratorsToRepositories?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_PageInfo = {
   __typename?: 'GitHub_PageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

export type GitHub_PermissionGranter = GitHub_Organization | GitHub_Repository | GitHub_Team;

export type GitHub_PermissionSource = {
   __typename?: 'GitHub_PermissionSource',
  organization: GitHub_Organization,
  permission: GitHub_DefaultRepositoryPermissionField,
  source: GitHub_PermissionGranter,
};

export type GitHub_PinnableItem = GitHub_Gist | GitHub_Repository;

export type GitHub_PinnableItemConnection = {
   __typename?: 'GitHub_PinnableItemConnection',
  edges?: Maybe<Array<Maybe<GitHub_PinnableItemEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PinnableItem>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PinnableItemEdge = {
   __typename?: 'GitHub_PinnableItemEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PinnableItem>,
};

export enum GitHub_PinnableItemType {
  Repository = 'REPOSITORY',
  Gist = 'GIST',
  Issue = 'ISSUE',
  Project = 'PROJECT',
  PullRequest = 'PULL_REQUEST',
  User = 'USER',
  Organization = 'ORGANIZATION',
  Team = 'TEAM'
}

export type GitHub_PinnedEvent = GitHub_Node & {
   __typename?: 'GitHub_PinnedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  issue: GitHub_Issue,
};


export type GitHub_PrivateRepositoryForkingDisableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_PrivateRepositoryForkingDisableAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_PrivateRepositoryForkingEnableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_PrivateRepositoryForkingEnableAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_ProfileItemShowcase = {
   __typename?: 'GitHub_ProfileItemShowcase',
  hasPinnedItems: Scalars['Boolean'],
  items: GitHub_PinnableItemConnection,
};


export type GitHub_ProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_ProfileOwner = {
  anyPinnableItems: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  itemShowcase: GitHub_ProfileItemShowcase,
  location?: Maybe<Scalars['String']>,
  login: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  pinnableItems: GitHub_PinnableItemConnection,
  pinnedItems: GitHub_PinnableItemConnection,
  pinnedItemsRemaining: Scalars['Int'],
  viewerCanChangePinnedItems: Scalars['Boolean'],
  websiteUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_ProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>
};


export type GitHub_ProfileOwnerPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_ProfileOwnerPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_Project = GitHub_Node & GitHub_Closable & GitHub_Updatable & {
   __typename?: 'GitHub_Project',
  body?: Maybe<Scalars['String']>,
  bodyHTML: Scalars['GitHub_HTML'],
  closed: Scalars['Boolean'],
  closedAt?: Maybe<Scalars['GitHub_DateTime']>,
  columns: GitHub_ProjectColumnConnection,
  createdAt: Scalars['GitHub_DateTime'],
  creator?: Maybe<GitHub_Actor>,
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  number: Scalars['Int'],
  owner: GitHub_ProjectOwner,
  pendingCards: GitHub_ProjectCardConnection,
  resourcePath: Scalars['GitHub_URI'],
  state: GitHub_ProjectState,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  viewerCanUpdate: Scalars['Boolean'],
};


export type GitHub_ProjectColumnsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_ProjectPendingCardsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>
};

export type GitHub_ProjectCard = GitHub_Node & {
   __typename?: 'GitHub_ProjectCard',
  column?: Maybe<GitHub_ProjectColumn>,
  content?: Maybe<GitHub_ProjectCardItem>,
  createdAt: Scalars['GitHub_DateTime'],
  creator?: Maybe<GitHub_Actor>,
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  note?: Maybe<Scalars['String']>,
  project: GitHub_Project,
  resourcePath: Scalars['GitHub_URI'],
  state?: Maybe<GitHub_ProjectCardState>,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};

export enum GitHub_ProjectCardArchivedState {
  Archived = 'ARCHIVED',
  NotArchived = 'NOT_ARCHIVED'
}

export type GitHub_ProjectCardConnection = {
   __typename?: 'GitHub_ProjectCardConnection',
  edges?: Maybe<Array<Maybe<GitHub_ProjectCardEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_ProjectCard>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ProjectCardEdge = {
   __typename?: 'GitHub_ProjectCardEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_ProjectCard>,
};

export type GitHub_ProjectCardItem = GitHub_Issue | GitHub_PullRequest;

export enum GitHub_ProjectCardState {
  ContentOnly = 'CONTENT_ONLY',
  NoteOnly = 'NOTE_ONLY',
  Redacted = 'REDACTED'
}

export type GitHub_ProjectColumn = GitHub_Node & {
   __typename?: 'GitHub_ProjectColumn',
  cards: GitHub_ProjectCardConnection,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  project: GitHub_Project,
  purpose?: Maybe<GitHub_ProjectColumnPurpose>,
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_ProjectColumnCardsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>
};

export type GitHub_ProjectColumnConnection = {
   __typename?: 'GitHub_ProjectColumnConnection',
  edges?: Maybe<Array<Maybe<GitHub_ProjectColumnEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_ProjectColumn>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ProjectColumnEdge = {
   __typename?: 'GitHub_ProjectColumnEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_ProjectColumn>,
};

export enum GitHub_ProjectColumnPurpose {
  Todo = 'TODO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE'
}

export type GitHub_ProjectConnection = {
   __typename?: 'GitHub_ProjectConnection',
  edges?: Maybe<Array<Maybe<GitHub_ProjectEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Project>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ProjectEdge = {
   __typename?: 'GitHub_ProjectEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Project>,
};

export type GitHub_ProjectOrder = {
  field: GitHub_ProjectOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_ProjectOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  Name = 'NAME'
}

export type GitHub_ProjectOwner = {
  id: Scalars['ID'],
  project?: Maybe<GitHub_Project>,
  projects: GitHub_ProjectConnection,
  projectsResourcePath: Scalars['GitHub_URI'],
  projectsUrl: Scalars['GitHub_URI'],
  viewerCanCreateProjects: Scalars['Boolean'],
};


export type GitHub_ProjectOwnerProjectArgs = {
  number: Scalars['Int']
};


export type GitHub_ProjectOwnerProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>,
  search?: Maybe<Scalars['String']>,
  states?: Maybe<Array<GitHub_ProjectState>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum GitHub_ProjectState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export enum GitHub_ProjectTemplate {
  BasicKanban = 'BASIC_KANBAN',
  AutomatedKanbanV2 = 'AUTOMATED_KANBAN_V2',
  AutomatedReviewsKanban = 'AUTOMATED_REVIEWS_KANBAN',
  BugTriage = 'BUG_TRIAGE'
}

export type GitHub_PublicKey = GitHub_Node & {
   __typename?: 'GitHub_PublicKey',
  accessedAt?: Maybe<Scalars['GitHub_DateTime']>,
  createdAt?: Maybe<Scalars['GitHub_DateTime']>,
  fingerprint: Scalars['String'],
  id: Scalars['ID'],
  isReadOnly?: Maybe<Scalars['Boolean']>,
  key: Scalars['String'],
  updatedAt?: Maybe<Scalars['GitHub_DateTime']>,
};

export type GitHub_PublicKeyConnection = {
   __typename?: 'GitHub_PublicKeyConnection',
  edges?: Maybe<Array<Maybe<GitHub_PublicKeyEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PublicKey>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PublicKeyEdge = {
   __typename?: 'GitHub_PublicKeyEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PublicKey>,
};

export type GitHub_PullRequest = GitHub_Node & GitHub_Assignable & GitHub_Closable & GitHub_Comment & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Labelable & GitHub_Lockable & GitHub_Reactable & GitHub_RepositoryNode & GitHub_Subscribable & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_PullRequest',
  activeLockReason?: Maybe<GitHub_LockReason>,
  additions: Scalars['Int'],
  assignees: GitHub_UserConnection,
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  baseRef?: Maybe<GitHub_Ref>,
  baseRefName: Scalars['String'],
  baseRefOid: Scalars['GitHub_GitObjectID'],
  baseRepository?: Maybe<GitHub_Repository>,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  changedFiles: Scalars['Int'],
  checksResourcePath: Scalars['GitHub_URI'],
  checksUrl: Scalars['GitHub_URI'],
  closed: Scalars['Boolean'],
  closedAt?: Maybe<Scalars['GitHub_DateTime']>,
  comments: GitHub_IssueCommentConnection,
  commits: GitHub_PullRequestCommitConnection,
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  deletions: Scalars['Int'],
  editor?: Maybe<GitHub_Actor>,
  files?: Maybe<GitHub_PullRequestChangedFileConnection>,
  headRef?: Maybe<GitHub_Ref>,
  headRefName: Scalars['String'],
  headRefOid: Scalars['GitHub_GitObjectID'],
  headRepository?: Maybe<GitHub_Repository>,
  headRepositoryOwner?: Maybe<GitHub_RepositoryOwner>,
  hovercard: GitHub_Hovercard,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isCrossRepository: Scalars['Boolean'],
  isDraft: Scalars['Boolean'],
  labels?: Maybe<GitHub_LabelConnection>,
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  locked: Scalars['Boolean'],
  maintainerCanModify: Scalars['Boolean'],
  mergeCommit?: Maybe<GitHub_Commit>,
  mergeable: GitHub_MergeableState,
  merged: Scalars['Boolean'],
  mergedAt?: Maybe<Scalars['GitHub_DateTime']>,
  mergedBy?: Maybe<GitHub_Actor>,
  milestone?: Maybe<GitHub_Milestone>,
  number: Scalars['Int'],
  participants: GitHub_UserConnection,
  permalink: Scalars['GitHub_URI'],
  potentialMergeCommit?: Maybe<GitHub_Commit>,
  projectCards: GitHub_ProjectCardConnection,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  revertResourcePath: Scalars['GitHub_URI'],
  revertUrl: Scalars['GitHub_URI'],
  reviewDecision?: Maybe<GitHub_PullRequestReviewDecision>,
  reviewRequests?: Maybe<GitHub_ReviewRequestConnection>,
  reviewThreads: GitHub_PullRequestReviewThreadConnection,
  reviews?: Maybe<GitHub_PullRequestReviewConnection>,
  state: GitHub_PullRequestState,
  suggestedReviewers: Array<Maybe<GitHub_SuggestedReviewer>>,
  timeline: GitHub_PullRequestTimelineConnection,
  timelineItems: GitHub_PullRequestTimelineItemsConnection,
  title: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanApplySuggestion: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
};


export type GitHub_PullRequestAssigneesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestCommitsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestFilesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>
};


export type GitHub_PullRequestLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestParticipantsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestProjectCardsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  archivedStates?: Maybe<Array<Maybe<GitHub_ProjectCardArchivedState>>>
};


export type GitHub_PullRequestReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_PullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestReviewsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  states?: Maybe<Array<GitHub_PullRequestReviewState>>,
  author?: Maybe<Scalars['String']>
};


export type GitHub_PullRequestTimelineArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestTimelineItemsArgs = {
  since?: Maybe<Scalars['GitHub_DateTime']>,
  skip?: Maybe<Scalars['Int']>,
  itemTypes?: Maybe<Array<GitHub_PullRequestTimelineItemsItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_PullRequestChangedFile = {
   __typename?: 'GitHub_PullRequestChangedFile',
  additions: Scalars['Int'],
  deletions: Scalars['Int'],
  path: Scalars['String'],
};

export type GitHub_PullRequestChangedFileConnection = {
   __typename?: 'GitHub_PullRequestChangedFileConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestChangedFileEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestChangedFile>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestChangedFileEdge = {
   __typename?: 'GitHub_PullRequestChangedFileEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestChangedFile>,
};

export type GitHub_PullRequestCommit = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_PullRequestCommit',
  commit: GitHub_Commit,
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_PullRequestCommitCommentThread = GitHub_Node & GitHub_RepositoryNode & {
   __typename?: 'GitHub_PullRequestCommitCommentThread',
  comments: GitHub_CommitCommentConnection,
  commit: GitHub_Commit,
  id: Scalars['ID'],
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  pullRequest: GitHub_PullRequest,
  repository: GitHub_Repository,
};


export type GitHub_PullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_PullRequestCommitConnection = {
   __typename?: 'GitHub_PullRequestCommitConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestCommitEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestCommit>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestCommitEdge = {
   __typename?: 'GitHub_PullRequestCommitEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestCommit>,
};

export type GitHub_PullRequestConnection = {
   __typename?: 'GitHub_PullRequestConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequest>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestContributionsByRepository = {
   __typename?: 'GitHub_PullRequestContributionsByRepository',
  contributions: GitHub_CreatedPullRequestContributionConnection,
  repository: GitHub_Repository,
};


export type GitHub_PullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};

export type GitHub_PullRequestEdge = {
   __typename?: 'GitHub_PullRequestEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequest>,
};

export enum GitHub_PullRequestMergeMethod {
  Merge = 'MERGE',
  Squash = 'SQUASH',
  Rebase = 'REBASE'
}

export type GitHub_PullRequestOrder = {
  field: GitHub_PullRequestOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_PullRequestOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type GitHub_PullRequestReview = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
   __typename?: 'GitHub_PullRequestReview',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  comments: GitHub_PullRequestReviewCommentConnection,
  commit?: Maybe<GitHub_Commit>,
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  onBehalfOf: GitHub_TeamConnection,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  pullRequest: GitHub_PullRequest,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  state: GitHub_PullRequestReviewState,
  submittedAt?: Maybe<Scalars['GitHub_DateTime']>,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_PullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_PullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_PullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_PullRequestReviewComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Minimizable & GitHub_Updatable & GitHub_UpdatableComment & GitHub_Reactable & GitHub_RepositoryNode & {
   __typename?: 'GitHub_PullRequestReviewComment',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  commit?: Maybe<GitHub_Commit>,
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  diffHunk: Scalars['String'],
  draftedAt: Scalars['GitHub_DateTime'],
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isMinimized: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  minimizedReason?: Maybe<Scalars['String']>,
  originalCommit?: Maybe<GitHub_Commit>,
  originalPosition: Scalars['Int'],
  outdated: Scalars['Boolean'],
  path: Scalars['String'],
  position?: Maybe<Scalars['Int']>,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  pullRequest: GitHub_PullRequest,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  replyTo?: Maybe<GitHub_PullRequestReviewComment>,
  repository: GitHub_Repository,
  resourcePath: Scalars['GitHub_URI'],
  state: GitHub_PullRequestReviewCommentState,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanMinimize: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_PullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_PullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_PullRequestReviewCommentConnection = {
   __typename?: 'GitHub_PullRequestReviewCommentConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewCommentEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReviewComment>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestReviewCommentEdge = {
   __typename?: 'GitHub_PullRequestReviewCommentEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestReviewComment>,
};

export enum GitHub_PullRequestReviewCommentState {
  Pending = 'PENDING',
  Submitted = 'SUBMITTED'
}

export type GitHub_PullRequestReviewConnection = {
   __typename?: 'GitHub_PullRequestReviewConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReview>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestReviewContributionsByRepository = {
   __typename?: 'GitHub_PullRequestReviewContributionsByRepository',
  contributions: GitHub_CreatedPullRequestReviewContributionConnection,
  repository: GitHub_Repository,
};


export type GitHub_PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_ContributionOrder>
};

export enum GitHub_PullRequestReviewDecision {
  ChangesRequested = 'CHANGES_REQUESTED',
  Approved = 'APPROVED',
  ReviewRequired = 'REVIEW_REQUIRED'
}

export type GitHub_PullRequestReviewEdge = {
   __typename?: 'GitHub_PullRequestReviewEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestReview>,
};

export enum GitHub_PullRequestReviewEvent {
  Comment = 'COMMENT',
  Approve = 'APPROVE',
  RequestChanges = 'REQUEST_CHANGES',
  Dismiss = 'DISMISS'
}

export enum GitHub_PullRequestReviewState {
  Pending = 'PENDING',
  Commented = 'COMMENTED',
  Approved = 'APPROVED',
  ChangesRequested = 'CHANGES_REQUESTED',
  Dismissed = 'DISMISSED'
}

export type GitHub_PullRequestReviewThread = GitHub_Node & {
   __typename?: 'GitHub_PullRequestReviewThread',
  comments: GitHub_PullRequestReviewCommentConnection,
  diffSide: GitHub_DiffSide,
  id: Scalars['ID'],
  isResolved: Scalars['Boolean'],
  line?: Maybe<Scalars['Int']>,
  originalLine?: Maybe<Scalars['Int']>,
  originalStartLine?: Maybe<Scalars['Int']>,
  pullRequest: GitHub_PullRequest,
  repository: GitHub_Repository,
  resolvedBy?: Maybe<GitHub_User>,
  startDiffSide?: Maybe<GitHub_DiffSide>,
  startLine?: Maybe<Scalars['Int']>,
  viewerCanResolve: Scalars['Boolean'],
  viewerCanUnresolve: Scalars['Boolean'],
};


export type GitHub_PullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type GitHub_PullRequestReviewThreadConnection = {
   __typename?: 'GitHub_PullRequestReviewThreadConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestReviewThreadEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestReviewThread>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestReviewThreadEdge = {
   __typename?: 'GitHub_PullRequestReviewThreadEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestReviewThread>,
};

export type GitHub_PullRequestRevisionMarker = {
   __typename?: 'GitHub_PullRequestRevisionMarker',
  createdAt: Scalars['GitHub_DateTime'],
  lastSeenCommit: GitHub_Commit,
  pullRequest: GitHub_PullRequest,
};

export enum GitHub_PullRequestState {
  Open = 'OPEN',
  Closed = 'CLOSED',
  Merged = 'MERGED'
}

export type GitHub_PullRequestTimelineConnection = {
   __typename?: 'GitHub_PullRequestTimelineConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItemEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItem>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PullRequestTimelineItem = GitHub_AssignedEvent | GitHub_BaseRefForcePushedEvent | GitHub_ClosedEvent | GitHub_Commit | GitHub_CommitCommentThread | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_DeployedEvent | GitHub_DeploymentEnvironmentChangedEvent | GitHub_HeadRefDeletedEvent | GitHub_HeadRefForcePushedEvent | GitHub_HeadRefRestoredEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MergedEvent | GitHub_MilestonedEvent | GitHub_PullRequestReview | GitHub_PullRequestReviewComment | GitHub_PullRequestReviewThread | GitHub_ReferencedEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_ReviewDismissedEvent | GitHub_ReviewRequestRemovedEvent | GitHub_ReviewRequestedEvent | GitHub_SubscribedEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

export type GitHub_PullRequestTimelineItemEdge = {
   __typename?: 'GitHub_PullRequestTimelineItemEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestTimelineItem>,
};

export type GitHub_PullRequestTimelineItems = GitHub_AddedToProjectEvent | GitHub_AssignedEvent | GitHub_BaseRefChangedEvent | GitHub_BaseRefForcePushedEvent | GitHub_ClosedEvent | GitHub_CommentDeletedEvent | GitHub_ConnectedEvent | GitHub_ConvertedNoteToIssueEvent | GitHub_CrossReferencedEvent | GitHub_DemilestonedEvent | GitHub_DeployedEvent | GitHub_DeploymentEnvironmentChangedEvent | GitHub_DisconnectedEvent | GitHub_HeadRefDeletedEvent | GitHub_HeadRefForcePushedEvent | GitHub_HeadRefRestoredEvent | GitHub_IssueComment | GitHub_LabeledEvent | GitHub_LockedEvent | GitHub_MarkedAsDuplicateEvent | GitHub_MentionedEvent | GitHub_MergedEvent | GitHub_MilestonedEvent | GitHub_MovedColumnsInProjectEvent | GitHub_PinnedEvent | GitHub_PullRequestCommit | GitHub_PullRequestCommitCommentThread | GitHub_PullRequestReview | GitHub_PullRequestReviewThread | GitHub_PullRequestRevisionMarker | GitHub_ReadyForReviewEvent | GitHub_ReferencedEvent | GitHub_RemovedFromProjectEvent | GitHub_RenamedTitleEvent | GitHub_ReopenedEvent | GitHub_ReviewDismissedEvent | GitHub_ReviewRequestRemovedEvent | GitHub_ReviewRequestedEvent | GitHub_SubscribedEvent | GitHub_TransferredEvent | GitHub_UnassignedEvent | GitHub_UnlabeledEvent | GitHub_UnlockedEvent | GitHub_UnmarkedAsDuplicateEvent | GitHub_UnpinnedEvent | GitHub_UnsubscribedEvent | GitHub_UserBlockedEvent;

export type GitHub_PullRequestTimelineItemsConnection = {
   __typename?: 'GitHub_PullRequestTimelineItemsConnection',
  edges?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItemsEdge>>>,
  filteredCount: Scalars['Int'],
  nodes?: Maybe<Array<Maybe<GitHub_PullRequestTimelineItems>>>,
  pageCount: Scalars['Int'],
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_PullRequestTimelineItemsEdge = {
   __typename?: 'GitHub_PullRequestTimelineItemsEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PullRequestTimelineItems>,
};

export enum GitHub_PullRequestTimelineItemsItemType {
  PullRequestCommit = 'PULL_REQUEST_COMMIT',
  PullRequestCommitCommentThread = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PullRequestReview = 'PULL_REQUEST_REVIEW',
  PullRequestReviewThread = 'PULL_REQUEST_REVIEW_THREAD',
  PullRequestRevisionMarker = 'PULL_REQUEST_REVISION_MARKER',
  BaseRefChangedEvent = 'BASE_REF_CHANGED_EVENT',
  BaseRefForcePushedEvent = 'BASE_REF_FORCE_PUSHED_EVENT',
  DeployedEvent = 'DEPLOYED_EVENT',
  DeploymentEnvironmentChangedEvent = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  HeadRefDeletedEvent = 'HEAD_REF_DELETED_EVENT',
  HeadRefForcePushedEvent = 'HEAD_REF_FORCE_PUSHED_EVENT',
  HeadRefRestoredEvent = 'HEAD_REF_RESTORED_EVENT',
  MergedEvent = 'MERGED_EVENT',
  ReviewDismissedEvent = 'REVIEW_DISMISSED_EVENT',
  ReviewRequestedEvent = 'REVIEW_REQUESTED_EVENT',
  ReviewRequestRemovedEvent = 'REVIEW_REQUEST_REMOVED_EVENT',
  ReadyForReviewEvent = 'READY_FOR_REVIEW_EVENT',
  IssueComment = 'ISSUE_COMMENT',
  CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
  AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
  AssignedEvent = 'ASSIGNED_EVENT',
  ClosedEvent = 'CLOSED_EVENT',
  CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
  ConnectedEvent = 'CONNECTED_EVENT',
  ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DemilestonedEvent = 'DEMILESTONED_EVENT',
  DisconnectedEvent = 'DISCONNECTED_EVENT',
  LabeledEvent = 'LABELED_EVENT',
  LockedEvent = 'LOCKED_EVENT',
  MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
  MentionedEvent = 'MENTIONED_EVENT',
  MilestonedEvent = 'MILESTONED_EVENT',
  MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PinnedEvent = 'PINNED_EVENT',
  ReferencedEvent = 'REFERENCED_EVENT',
  RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
  RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
  ReopenedEvent = 'REOPENED_EVENT',
  SubscribedEvent = 'SUBSCRIBED_EVENT',
  TransferredEvent = 'TRANSFERRED_EVENT',
  UnassignedEvent = 'UNASSIGNED_EVENT',
  UnlabeledEvent = 'UNLABELED_EVENT',
  UnlockedEvent = 'UNLOCKED_EVENT',
  UserBlockedEvent = 'USER_BLOCKED_EVENT',
  UnmarkedAsDuplicateEvent = 'UNMARKED_AS_DUPLICATE_EVENT',
  UnpinnedEvent = 'UNPINNED_EVENT',
  UnsubscribedEvent = 'UNSUBSCRIBED_EVENT'
}

export enum GitHub_PullRequestUpdateState {
  Open = 'OPEN',
  Closed = 'CLOSED'
}

export type GitHub_PushAllowance = GitHub_Node & {
   __typename?: 'GitHub_PushAllowance',
  actor?: Maybe<GitHub_PushAllowanceActor>,
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>,
  id: Scalars['ID'],
};

export type GitHub_PushAllowanceActor = GitHub_App | GitHub_Team | GitHub_User;

export type GitHub_PushAllowanceConnection = {
   __typename?: 'GitHub_PushAllowanceConnection',
  edges?: Maybe<Array<Maybe<GitHub_PushAllowanceEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_PushAllowance>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_PushAllowanceEdge = {
   __typename?: 'GitHub_PushAllowanceEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_PushAllowance>,
};

export type GitHub_RateLimit = {
   __typename?: 'GitHub_RateLimit',
  cost: Scalars['Int'],
  limit: Scalars['Int'],
  nodeCount: Scalars['Int'],
  remaining: Scalars['Int'],
  resetAt: Scalars['GitHub_DateTime'],
};

export type GitHub_Reactable = {
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  viewerCanReact: Scalars['Boolean'],
};


export type GitHub_ReactableReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};

export type GitHub_ReactingUserConnection = {
   __typename?: 'GitHub_ReactingUserConnection',
  edges?: Maybe<Array<Maybe<GitHub_ReactingUserEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ReactingUserEdge = {
   __typename?: 'GitHub_ReactingUserEdge',
  cursor: Scalars['String'],
  node: GitHub_User,
  reactedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_Reaction = GitHub_Node & {
   __typename?: 'GitHub_Reaction',
  content: GitHub_ReactionContent,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  reactable: GitHub_Reactable,
  user?: Maybe<GitHub_User>,
};

export type GitHub_ReactionConnection = {
   __typename?: 'GitHub_ReactionConnection',
  edges?: Maybe<Array<Maybe<GitHub_ReactionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Reaction>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
  viewerHasReacted: Scalars['Boolean'],
};

export enum GitHub_ReactionContent {
  ThumbsUp = 'THUMBS_UP',
  ThumbsDown = 'THUMBS_DOWN',
  Laugh = 'LAUGH',
  Hooray = 'HOORAY',
  Confused = 'CONFUSED',
  Heart = 'HEART',
  Rocket = 'ROCKET',
  Eyes = 'EYES'
}

export type GitHub_ReactionEdge = {
   __typename?: 'GitHub_ReactionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Reaction>,
};

export type GitHub_ReactionGroup = {
   __typename?: 'GitHub_ReactionGroup',
  content: GitHub_ReactionContent,
  createdAt?: Maybe<Scalars['GitHub_DateTime']>,
  subject: GitHub_Reactable,
  users: GitHub_ReactingUserConnection,
  viewerHasReacted: Scalars['Boolean'],
};


export type GitHub_ReactionGroupUsersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_ReactionOrder = {
  field: GitHub_ReactionOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_ReactionOrderField {
  CreatedAt = 'CREATED_AT'
}

export type GitHub_ReadyForReviewEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_ReadyForReviewEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_Ref = GitHub_Node & {
   __typename?: 'GitHub_Ref',
  associatedPullRequests: GitHub_PullRequestConnection,
  id: Scalars['ID'],
  name: Scalars['String'],
  prefix: Scalars['String'],
  repository: GitHub_Repository,
  target: GitHub_GitObject,
};


export type GitHub_RefAssociatedPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>,
  labels?: Maybe<Array<Scalars['String']>>,
  headRefName?: Maybe<Scalars['String']>,
  baseRefName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_IssueOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_RefConnection = {
   __typename?: 'GitHub_RefConnection',
  edges?: Maybe<Array<Maybe<GitHub_RefEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Ref>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RefEdge = {
   __typename?: 'GitHub_RefEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Ref>,
};

export type GitHub_ReferencedEvent = GitHub_Node & {
   __typename?: 'GitHub_ReferencedEvent',
  actor?: Maybe<GitHub_Actor>,
  commit?: Maybe<GitHub_Commit>,
  commitRepository: GitHub_Repository,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  isCrossRepository: Scalars['Boolean'],
  isDirectReference: Scalars['Boolean'],
  subject: GitHub_ReferencedSubject,
};

export type GitHub_ReferencedSubject = GitHub_Issue | GitHub_PullRequest;

export type GitHub_RefOrder = {
  field: GitHub_RefOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_RefOrderField {
  TagCommitDate = 'TAG_COMMIT_DATE',
  Alphabetical = 'ALPHABETICAL'
}

export type GitHub_RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  enterpriseId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
   __typename?: 'GitHub_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  identityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>,
};

export type GitHub_RegistryPackage = GitHub_Node & {
   __typename?: 'GitHub_RegistryPackage',
  color: Scalars['String'],
  id: Scalars['ID'],
  latestVersion?: Maybe<GitHub_RegistryPackageVersion>,
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
  packageFileByGuid?: Maybe<GitHub_RegistryPackageFile>,
  packageFileBySha256?: Maybe<GitHub_RegistryPackageFile>,
  packageType: GitHub_RegistryPackageType,
  preReleaseVersions?: Maybe<GitHub_RegistryPackageVersionConnection>,
  registryPackageType?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
  statistics?: Maybe<GitHub_RegistryPackageStatistics>,
  tags: GitHub_RegistryPackageTagConnection,
  topics?: Maybe<GitHub_TopicConnection>,
  version?: Maybe<GitHub_RegistryPackageVersion>,
  versionByPlatform?: Maybe<GitHub_RegistryPackageVersion>,
  versionBySha256?: Maybe<GitHub_RegistryPackageVersion>,
  versions: GitHub_RegistryPackageVersionConnection,
  versionsByMetadatum?: Maybe<GitHub_RegistryPackageVersionConnection>,
};


export type GitHub_RegistryPackagePackageFileByGuidArgs = {
  guid: Scalars['String']
};


export type GitHub_RegistryPackagePackageFileBySha256Args = {
  sha256: Scalars['String']
};


export type GitHub_RegistryPackagePreReleaseVersionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RegistryPackageTagsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RegistryPackageTopicsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RegistryPackageVersionArgs = {
  version: Scalars['String']
};


export type GitHub_RegistryPackageVersionByPlatformArgs = {
  version: Scalars['String'],
  platform: Scalars['String']
};


export type GitHub_RegistryPackageVersionBySha256Args = {
  sha256: Scalars['String']
};


export type GitHub_RegistryPackageVersionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RegistryPackageVersionsByMetadatumArgs = {
  metadatum: GitHub_RegistryPackageMetadatum,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_RegistryPackageConnection = {
   __typename?: 'GitHub_RegistryPackageConnection',
  edges?: Maybe<Array<Maybe<GitHub_RegistryPackageEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RegistryPackage>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RegistryPackageDependency = GitHub_Node & {
   __typename?: 'GitHub_RegistryPackageDependency',
  dependencyType: GitHub_RegistryPackageDependencyType,
  id: Scalars['ID'],
  name: Scalars['String'],
  version: Scalars['String'],
};

export type GitHub_RegistryPackageDependencyConnection = {
   __typename?: 'GitHub_RegistryPackageDependencyConnection',
  edges?: Maybe<Array<Maybe<GitHub_RegistryPackageDependencyEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RegistryPackageDependency>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RegistryPackageDependencyEdge = {
   __typename?: 'GitHub_RegistryPackageDependencyEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RegistryPackageDependency>,
};

export enum GitHub_RegistryPackageDependencyType {
  Default = 'DEFAULT',
  Dev = 'DEV',
  Test = 'TEST',
  Peer = 'PEER',
  Optional = 'OPTIONAL',
  Bundled = 'BUNDLED'
}

export type GitHub_RegistryPackageEdge = {
   __typename?: 'GitHub_RegistryPackageEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RegistryPackage>,
};

export type GitHub_RegistryPackageFile = GitHub_Node & {
   __typename?: 'GitHub_RegistryPackageFile',
  guid?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  md5?: Maybe<Scalars['String']>,
  metadataUrl: Scalars['GitHub_URI'],
  name: Scalars['String'],
  packageVersion: GitHub_RegistryPackageVersion,
  sha1?: Maybe<Scalars['String']>,
  sha256?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_RegistryPackageFileConnection = {
   __typename?: 'GitHub_RegistryPackageFileConnection',
  edges?: Maybe<Array<Maybe<GitHub_RegistryPackageFileEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RegistryPackageFile>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RegistryPackageFileEdge = {
   __typename?: 'GitHub_RegistryPackageFileEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RegistryPackageFile>,
};

export type GitHub_RegistryPackageMetadatum = {
  name: Scalars['String'],
  value: Scalars['String'],
  update?: Maybe<Scalars['Boolean']>,
};

export type GitHub_RegistryPackageOwner = {
  id: Scalars['ID'],
  registryPackages: GitHub_RegistryPackageConnection,
};


export type GitHub_RegistryPackageOwnerRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId?: Maybe<Scalars['ID']>,
  packageType?: Maybe<GitHub_RegistryPackageType>,
  registryPackageType?: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};

export type GitHub_RegistryPackageSearch = {
  id: Scalars['ID'],
  registryPackagesForQuery: GitHub_RegistryPackageConnection,
};


export type GitHub_RegistryPackageSearchRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  packageType?: Maybe<GitHub_RegistryPackageType>
};

export type GitHub_RegistryPackageStatistics = {
   __typename?: 'GitHub_RegistryPackageStatistics',
  downloadsThisMonth: Scalars['Int'],
  downloadsThisWeek: Scalars['Int'],
  downloadsThisYear: Scalars['Int'],
  downloadsToday: Scalars['Int'],
  downloadsTotalCount: Scalars['Int'],
};

export type GitHub_RegistryPackageTag = GitHub_Node & {
   __typename?: 'GitHub_RegistryPackageTag',
  id: Scalars['ID'],
  name: Scalars['String'],
  version?: Maybe<GitHub_RegistryPackageVersion>,
};

export type GitHub_RegistryPackageTagConnection = {
   __typename?: 'GitHub_RegistryPackageTagConnection',
  edges?: Maybe<Array<Maybe<GitHub_RegistryPackageTagEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RegistryPackageTag>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RegistryPackageTagEdge = {
   __typename?: 'GitHub_RegistryPackageTagEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RegistryPackageTag>,
};

export enum GitHub_RegistryPackageType {
  Npm = 'NPM',
  Rubygems = 'RUBYGEMS',
  Maven = 'MAVEN',
  Docker = 'DOCKER',
  Debian = 'DEBIAN',
  Nuget = 'NUGET',
  Python = 'PYTHON'
}

export type GitHub_RegistryPackageVersion = GitHub_Node & {
   __typename?: 'GitHub_RegistryPackageVersion',
  dependencies: GitHub_RegistryPackageDependencyConnection,
  fileByName?: Maybe<GitHub_RegistryPackageFile>,
  files: GitHub_RegistryPackageFileConnection,
  id: Scalars['ID'],
  installationCommand?: Maybe<Scalars['String']>,
  manifest?: Maybe<Scalars['String']>,
  platform?: Maybe<Scalars['String']>,
  preRelease: Scalars['Boolean'],
  readme?: Maybe<Scalars['String']>,
  readmeHtml?: Maybe<Scalars['GitHub_HTML']>,
  registryPackage?: Maybe<GitHub_RegistryPackage>,
  release?: Maybe<GitHub_Release>,
  sha256?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  statistics?: Maybe<GitHub_RegistryPackageVersionStatistics>,
  summary?: Maybe<Scalars['String']>,
  updatedAt: Scalars['GitHub_DateTime'],
  version: Scalars['String'],
  viewerCanEdit: Scalars['Boolean'],
};


export type GitHub_RegistryPackageVersionDependenciesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  type?: Maybe<GitHub_RegistryPackageDependencyType>
};


export type GitHub_RegistryPackageVersionFileByNameArgs = {
  filename: Scalars['String']
};


export type GitHub_RegistryPackageVersionFilesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_RegistryPackageVersionConnection = {
   __typename?: 'GitHub_RegistryPackageVersionConnection',
  edges?: Maybe<Array<Maybe<GitHub_RegistryPackageVersionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RegistryPackageVersion>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RegistryPackageVersionEdge = {
   __typename?: 'GitHub_RegistryPackageVersionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RegistryPackageVersion>,
};

export type GitHub_RegistryPackageVersionStatistics = {
   __typename?: 'GitHub_RegistryPackageVersionStatistics',
  downloadsThisMonth: Scalars['Int'],
  downloadsThisWeek: Scalars['Int'],
  downloadsThisYear: Scalars['Int'],
  downloadsToday: Scalars['Int'],
  downloadsTotalCount: Scalars['Int'],
};

export type GitHub_Release = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_Release',
  author?: Maybe<GitHub_User>,
  createdAt: Scalars['GitHub_DateTime'],
  description?: Maybe<Scalars['String']>,
  descriptionHTML?: Maybe<Scalars['GitHub_HTML']>,
  id: Scalars['ID'],
  isDraft: Scalars['Boolean'],
  isPrerelease: Scalars['Boolean'],
  name?: Maybe<Scalars['String']>,
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  releaseAssets: GitHub_ReleaseAssetConnection,
  resourcePath: Scalars['GitHub_URI'],
  shortDescriptionHTML?: Maybe<Scalars['GitHub_HTML']>,
  tag?: Maybe<GitHub_Ref>,
  tagName: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_ReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


export type GitHub_ReleaseShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>
};

export type GitHub_ReleaseAsset = GitHub_Node & {
   __typename?: 'GitHub_ReleaseAsset',
  contentType: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  downloadCount: Scalars['Int'],
  downloadUrl: Scalars['GitHub_URI'],
  id: Scalars['ID'],
  name: Scalars['String'],
  release?: Maybe<GitHub_Release>,
  size: Scalars['Int'],
  updatedAt: Scalars['GitHub_DateTime'],
  uploadedBy: GitHub_User,
  url: Scalars['GitHub_URI'],
};

export type GitHub_ReleaseAssetConnection = {
   __typename?: 'GitHub_ReleaseAssetConnection',
  edges?: Maybe<Array<Maybe<GitHub_ReleaseAssetEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_ReleaseAsset>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ReleaseAssetEdge = {
   __typename?: 'GitHub_ReleaseAssetEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_ReleaseAsset>,
};

export type GitHub_ReleaseConnection = {
   __typename?: 'GitHub_ReleaseConnection',
  edges?: Maybe<Array<Maybe<GitHub_ReleaseEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Release>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ReleaseEdge = {
   __typename?: 'GitHub_ReleaseEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Release>,
};

export type GitHub_ReleaseOrder = {
  field: GitHub_ReleaseOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_ReleaseOrderField {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME'
}

export type GitHub_RemoveAssigneesFromAssignableInput = {
  assignableId: Scalars['ID'],
  assigneeIds: Array<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveAssigneesFromAssignablePayload = {
   __typename?: 'GitHub_RemoveAssigneesFromAssignablePayload',
  assignable?: Maybe<GitHub_Assignable>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemovedFromProjectEvent = GitHub_Node & {
   __typename?: 'GitHub_RemovedFromProjectEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
};

export type GitHub_RemoveEnterpriseAdminInput = {
  enterpriseId: Scalars['ID'],
  login: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveEnterpriseAdminPayload = {
   __typename?: 'GitHub_RemoveEnterpriseAdminPayload',
  admin?: Maybe<GitHub_User>,
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
  viewer?: Maybe<GitHub_User>,
};

export type GitHub_RemoveEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveEnterpriseIdentityProviderPayload = {
   __typename?: 'GitHub_RemoveEnterpriseIdentityProviderPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  identityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>,
};

export type GitHub_RemoveEnterpriseOrganizationInput = {
  enterpriseId: Scalars['ID'],
  organizationId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveEnterpriseOrganizationPayload = {
   __typename?: 'GitHub_RemoveEnterpriseOrganizationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  organization?: Maybe<GitHub_Organization>,
  viewer?: Maybe<GitHub_User>,
};

export type GitHub_RemoveLabelsFromLabelableInput = {
  labelableId: Scalars['ID'],
  labelIds: Array<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveLabelsFromLabelablePayload = {
   __typename?: 'GitHub_RemoveLabelsFromLabelablePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  labelable?: Maybe<GitHub_Labelable>,
};

export type GitHub_RemoveOutsideCollaboratorInput = {
  userId: Scalars['ID'],
  organizationId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveOutsideCollaboratorPayload = {
   __typename?: 'GitHub_RemoveOutsideCollaboratorPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  removedUser?: Maybe<GitHub_User>,
};

export type GitHub_RemoveReactionInput = {
  subjectId: Scalars['ID'],
  content: GitHub_ReactionContent,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveReactionPayload = {
   __typename?: 'GitHub_RemoveReactionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  reaction?: Maybe<GitHub_Reaction>,
  subject?: Maybe<GitHub_Reactable>,
};

export type GitHub_RemoveStarInput = {
  starrableId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RemoveStarPayload = {
   __typename?: 'GitHub_RemoveStarPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  starrable?: Maybe<GitHub_Starrable>,
};

export type GitHub_RenamedTitleEvent = GitHub_Node & {
   __typename?: 'GitHub_RenamedTitleEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  currentTitle: Scalars['String'],
  id: Scalars['ID'],
  previousTitle: Scalars['String'],
  subject: GitHub_RenamedTitleSubject,
};

export type GitHub_RenamedTitleSubject = GitHub_Issue | GitHub_PullRequest;

export type GitHub_ReopenedEvent = GitHub_Node & {
   __typename?: 'GitHub_ReopenedEvent',
  actor?: Maybe<GitHub_Actor>,
  closable: GitHub_Closable,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
};

export type GitHub_ReopenIssueInput = {
  issueId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ReopenIssuePayload = {
   __typename?: 'GitHub_ReopenIssuePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  issue?: Maybe<GitHub_Issue>,
};

export type GitHub_ReopenPullRequestInput = {
  pullRequestId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ReopenPullRequestPayload = {
   __typename?: 'GitHub_ReopenPullRequestPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
};

export type GitHub_RepoAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoAccessAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_RepoAccessAuditEntryVisibility>,
};

export enum GitHub_RepoAccessAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GitHub_RepoAddMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoAddMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_RepoAddMemberAuditEntryVisibility>,
};

export enum GitHub_RepoAddMemberAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GitHub_RepoAddTopicAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_TopicAuditEntryData & {
   __typename?: 'GitHub_RepoAddTopicAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  topic?: Maybe<GitHub_Topic>,
  topicName?: Maybe<Scalars['String']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoArchivedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_RepoArchivedAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_RepoArchivedAuditEntryVisibility>,
};

export enum GitHub_RepoArchivedAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GitHub_RepoChangeMergeSettingAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_RepoChangeMergeSettingAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  isEnabled?: Maybe<Scalars['Boolean']>,
  mergeType?: Maybe<GitHub_RepoChangeMergeSettingAuditEntryMergeType>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_RepoChangeMergeSettingAuditEntryMergeType {
  Merge = 'MERGE',
  Rebase = 'REBASE',
  Squash = 'SQUASH'
}

export type GitHub_RepoConfigDisableAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigDisableAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigDisableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigDisableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigDisableContributorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigDisableContributorsOnlyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigDisableSockpuppetDisallowedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigDisableSockpuppetDisallowedAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigEnableAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigEnableAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigEnableCollaboratorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigEnableCollaboratorsOnlyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigEnableContributorsOnlyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigEnableContributorsOnlyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigEnableSockpuppetDisallowedAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigEnableSockpuppetDisallowedAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigLockAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigLockAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoConfigUnlockAnonymousGitAccessAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoConfigUnlockAnonymousGitAccessAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepoCreateAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_RepoCreateAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  forkParentName?: Maybe<Scalars['String']>,
  forkSourceName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_RepoCreateAuditEntryVisibility>,
};

export enum GitHub_RepoCreateAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GitHub_RepoDestroyAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_RepoDestroyAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_RepoDestroyAuditEntryVisibility>,
};

export enum GitHub_RepoDestroyAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GitHub_RepoRemoveMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & {
   __typename?: 'GitHub_RepoRemoveMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
  visibility?: Maybe<GitHub_RepoRemoveMemberAuditEntryVisibility>,
};

export enum GitHub_RepoRemoveMemberAuditEntryVisibility {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GitHub_RepoRemoveTopicAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_RepositoryAuditEntryData & GitHub_OrganizationAuditEntryData & GitHub_TopicAuditEntryData & {
   __typename?: 'GitHub_RepoRemoveTopicAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  topic?: Maybe<GitHub_Topic>,
  topicName?: Maybe<Scalars['String']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export enum GitHub_ReportedContentClassifiers {
  Spam = 'SPAM',
  Abuse = 'ABUSE',
  OffTopic = 'OFF_TOPIC',
  Outdated = 'OUTDATED',
  Duplicate = 'DUPLICATE',
  Resolved = 'RESOLVED'
}

export type GitHub_Repository = GitHub_Node & GitHub_ProjectOwner & GitHub_RegistryPackageOwner & GitHub_RegistryPackageSearch & GitHub_Subscribable & GitHub_Starrable & GitHub_UniformResourceLocatable & GitHub_RepositoryInfo & {
   __typename?: 'GitHub_Repository',
  assignableUsers: GitHub_UserConnection,
  branchProtectionRules: GitHub_BranchProtectionRuleConnection,
  codeOfConduct?: Maybe<GitHub_CodeOfConduct>,
  collaborators?: Maybe<GitHub_RepositoryCollaboratorConnection>,
  commitComments: GitHub_CommitCommentConnection,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  defaultBranchRef?: Maybe<GitHub_Ref>,
  deleteBranchOnMerge: Scalars['Boolean'],
  deployKeys: GitHub_DeployKeyConnection,
  deployments: GitHub_DeploymentConnection,
  description?: Maybe<Scalars['String']>,
  descriptionHTML: Scalars['GitHub_HTML'],
  diskUsage?: Maybe<Scalars['Int']>,
  forkCount: Scalars['Int'],
  forks: GitHub_RepositoryConnection,
  fundingLinks: Array<GitHub_FundingLink>,
  hasIssuesEnabled: Scalars['Boolean'],
  hasProjectsEnabled: Scalars['Boolean'],
  hasWikiEnabled: Scalars['Boolean'],
  homepageUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  isArchived: Scalars['Boolean'],
  isDisabled: Scalars['Boolean'],
  isFork: Scalars['Boolean'],
  isLocked: Scalars['Boolean'],
  isMirror: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  isTemplate: Scalars['Boolean'],
  issue?: Maybe<GitHub_Issue>,
  issueOrPullRequest?: Maybe<GitHub_IssueOrPullRequest>,
  issues: GitHub_IssueConnection,
  label?: Maybe<GitHub_Label>,
  labels?: Maybe<GitHub_LabelConnection>,
  languages?: Maybe<GitHub_LanguageConnection>,
  licenseInfo?: Maybe<GitHub_License>,
  lockReason?: Maybe<GitHub_RepositoryLockReason>,
  mentionableUsers: GitHub_UserConnection,
  mergeCommitAllowed: Scalars['Boolean'],
  milestone?: Maybe<GitHub_Milestone>,
  milestones?: Maybe<GitHub_MilestoneConnection>,
  mirrorUrl?: Maybe<Scalars['GitHub_URI']>,
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
  object?: Maybe<GitHub_GitObject>,
  openGraphImageUrl: Scalars['GitHub_URI'],
  owner: GitHub_RepositoryOwner,
  parent?: Maybe<GitHub_Repository>,
  primaryLanguage?: Maybe<GitHub_Language>,
  project?: Maybe<GitHub_Project>,
  projects: GitHub_ProjectConnection,
  projectsResourcePath: Scalars['GitHub_URI'],
  projectsUrl: Scalars['GitHub_URI'],
  pullRequest?: Maybe<GitHub_PullRequest>,
  pullRequests: GitHub_PullRequestConnection,
  pushedAt?: Maybe<Scalars['GitHub_DateTime']>,
  rebaseMergeAllowed: Scalars['Boolean'],
  ref?: Maybe<GitHub_Ref>,
  refs?: Maybe<GitHub_RefConnection>,
  registryPackages: GitHub_RegistryPackageConnection,
  registryPackagesForQuery: GitHub_RegistryPackageConnection,
  release?: Maybe<GitHub_Release>,
  releases: GitHub_ReleaseConnection,
  repositoryTopics: GitHub_RepositoryTopicConnection,
  resourcePath: Scalars['GitHub_URI'],
  shortDescriptionHTML: Scalars['GitHub_HTML'],
  squashMergeAllowed: Scalars['Boolean'],
  sshUrl: Scalars['GitHub_GitSSHRemote'],
  stargazers: GitHub_StargazerConnection,
  submodules: GitHub_SubmoduleConnection,
  tempCloneToken?: Maybe<Scalars['String']>,
  templateRepository?: Maybe<GitHub_Repository>,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  usesCustomOpenGraphImage: Scalars['Boolean'],
  viewerCanAdminister: Scalars['Boolean'],
  viewerCanCreateProjects: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdateTopics: Scalars['Boolean'],
  viewerHasStarred: Scalars['Boolean'],
  viewerPermission?: Maybe<GitHub_RepositoryPermission>,
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
  vulnerabilityAlerts?: Maybe<GitHub_RepositoryVulnerabilityAlertConnection>,
  watchers: GitHub_UserConnection,
};


export type GitHub_RepositoryAssignableUsersArgs = {
  query?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryCollaboratorsArgs = {
  affiliation?: Maybe<GitHub_CollaboratorAffiliation>,
  query?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryDeployKeysArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryDeploymentsArgs = {
  environments?: Maybe<Array<Scalars['String']>>,
  orderBy?: Maybe<GitHub_DeploymentOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryForksArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryIssueArgs = {
  number: Scalars['Int']
};


export type GitHub_RepositoryIssueOrPullRequestArgs = {
  number: Scalars['Int']
};


export type GitHub_RepositoryIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>,
  labels?: Maybe<Array<Scalars['String']>>,
  states?: Maybe<Array<GitHub_IssueState>>,
  filterBy?: Maybe<GitHub_IssueFilters>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryLabelArgs = {
  name: Scalars['String']
};


export type GitHub_RepositoryLabelsArgs = {
  orderBy?: Maybe<GitHub_LabelOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>
};


export type GitHub_RepositoryLanguagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_LanguageOrder>
};


export type GitHub_RepositoryMentionableUsersArgs = {
  query?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryMilestoneArgs = {
  number: Scalars['Int']
};


export type GitHub_RepositoryMilestonesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  states?: Maybe<Array<GitHub_MilestoneState>>,
  orderBy?: Maybe<GitHub_MilestoneOrder>
};


export type GitHub_RepositoryObjectArgs = {
  oid?: Maybe<Scalars['GitHub_GitObjectID']>,
  expression?: Maybe<Scalars['String']>
};


export type GitHub_RepositoryProjectArgs = {
  number: Scalars['Int']
};


export type GitHub_RepositoryProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>,
  search?: Maybe<Scalars['String']>,
  states?: Maybe<Array<GitHub_ProjectState>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryPullRequestArgs = {
  number: Scalars['Int']
};


export type GitHub_RepositoryPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>,
  labels?: Maybe<Array<Scalars['String']>>,
  headRefName?: Maybe<Scalars['String']>,
  baseRefName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_IssueOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryRefArgs = {
  qualifiedName: Scalars['String']
};


export type GitHub_RepositoryRefsArgs = {
  query?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  refPrefix: Scalars['String'],
  direction?: Maybe<GitHub_OrderDirection>,
  orderBy?: Maybe<GitHub_RefOrder>
};


export type GitHub_RepositoryRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId?: Maybe<Scalars['ID']>,
  packageType?: Maybe<GitHub_RegistryPackageType>,
  registryPackageType?: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};


export type GitHub_RepositoryRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  packageType?: Maybe<GitHub_RegistryPackageType>
};


export type GitHub_RepositoryReleaseArgs = {
  tagName: Scalars['String']
};


export type GitHub_RepositoryReleasesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_ReleaseOrder>
};


export type GitHub_RepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryStargazersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_StarOrder>
};


export type GitHub_RepositorySubmodulesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryVulnerabilityAlertsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryWatchersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum GitHub_RepositoryAffiliation {
  Owner = 'OWNER',
  Collaborator = 'COLLABORATOR',
  OrganizationMember = 'ORGANIZATION_MEMBER'
}

export type GitHub_RepositoryAuditEntryData = {
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepositoryCollaboratorConnection = {
   __typename?: 'GitHub_RepositoryCollaboratorConnection',
  edges?: Maybe<Array<Maybe<GitHub_RepositoryCollaboratorEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RepositoryCollaboratorEdge = {
   __typename?: 'GitHub_RepositoryCollaboratorEdge',
  cursor: Scalars['String'],
  node: GitHub_User,
  permission: GitHub_RepositoryPermission,
  permissionSources?: Maybe<Array<GitHub_PermissionSource>>,
};

export type GitHub_RepositoryConnection = {
   __typename?: 'GitHub_RepositoryConnection',
  edges?: Maybe<Array<Maybe<GitHub_RepositoryEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
  totalDiskUsage: Scalars['Int'],
};

export enum GitHub_RepositoryContributionType {
  Commit = 'COMMIT',
  Issue = 'ISSUE',
  PullRequest = 'PULL_REQUEST',
  Repository = 'REPOSITORY',
  PullRequestReview = 'PULL_REQUEST_REVIEW'
}

export type GitHub_RepositoryEdge = {
   __typename?: 'GitHub_RepositoryEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Repository>,
};

export type GitHub_RepositoryInfo = {
  createdAt: Scalars['GitHub_DateTime'],
  description?: Maybe<Scalars['String']>,
  descriptionHTML: Scalars['GitHub_HTML'],
  forkCount: Scalars['Int'],
  hasIssuesEnabled: Scalars['Boolean'],
  hasProjectsEnabled: Scalars['Boolean'],
  hasWikiEnabled: Scalars['Boolean'],
  homepageUrl?: Maybe<Scalars['GitHub_URI']>,
  isArchived: Scalars['Boolean'],
  isFork: Scalars['Boolean'],
  isLocked: Scalars['Boolean'],
  isMirror: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  isTemplate: Scalars['Boolean'],
  licenseInfo?: Maybe<GitHub_License>,
  lockReason?: Maybe<GitHub_RepositoryLockReason>,
  mirrorUrl?: Maybe<Scalars['GitHub_URI']>,
  name: Scalars['String'],
  nameWithOwner: Scalars['String'],
  openGraphImageUrl: Scalars['GitHub_URI'],
  owner: GitHub_RepositoryOwner,
  pushedAt?: Maybe<Scalars['GitHub_DateTime']>,
  resourcePath: Scalars['GitHub_URI'],
  shortDescriptionHTML: Scalars['GitHub_HTML'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  usesCustomOpenGraphImage: Scalars['Boolean'],
};


export type GitHub_RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars['Int']>
};

export type GitHub_RepositoryInvitation = GitHub_Node & {
   __typename?: 'GitHub_RepositoryInvitation',
  id: Scalars['ID'],
  invitee: GitHub_User,
  inviter: GitHub_User,
  permission: GitHub_RepositoryPermission,
  repository?: Maybe<GitHub_RepositoryInfo>,
};

export type GitHub_RepositoryInvitationOrder = {
  field: GitHub_RepositoryInvitationOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_RepositoryInvitationOrderField {
  CreatedAt = 'CREATED_AT',
  InviteeLogin = 'INVITEE_LOGIN'
}

export enum GitHub_RepositoryLockReason {
  Moving = 'MOVING',
  Billing = 'BILLING',
  Rename = 'RENAME',
  Migrating = 'MIGRATING'
}

export type GitHub_RepositoryNode = {
  repository: GitHub_Repository,
};

export type GitHub_RepositoryOrder = {
  field: GitHub_RepositoryOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_RepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Stargazers = 'STARGAZERS'
}

export type GitHub_RepositoryOwner = {
  avatarUrl: Scalars['GitHub_URI'],
  id: Scalars['ID'],
  login: Scalars['String'],
  pinnedRepositories: GitHub_RepositoryConnection,
  repositories: GitHub_RepositoryConnection,
  repository?: Maybe<GitHub_Repository>,
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};


export type GitHub_RepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryOwnerPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_RepositoryOwnerRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  isFork?: Maybe<Scalars['Boolean']>
};


export type GitHub_RepositoryOwnerRepositoryArgs = {
  name: Scalars['String']
};

export enum GitHub_RepositoryPermission {
  Admin = 'ADMIN',
  Maintain = 'MAINTAIN',
  Write = 'WRITE',
  Triage = 'TRIAGE',
  Read = 'READ'
}

export enum GitHub_RepositoryPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GitHub_RepositoryTopic = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_RepositoryTopic',
  id: Scalars['ID'],
  resourcePath: Scalars['GitHub_URI'],
  topic: GitHub_Topic,
  url: Scalars['GitHub_URI'],
};

export type GitHub_RepositoryTopicConnection = {
   __typename?: 'GitHub_RepositoryTopicConnection',
  edges?: Maybe<Array<Maybe<GitHub_RepositoryTopicEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RepositoryTopic>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RepositoryTopicEdge = {
   __typename?: 'GitHub_RepositoryTopicEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RepositoryTopic>,
};

export enum GitHub_RepositoryVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Internal = 'INTERNAL'
}

export type GitHub_RepositoryVisibilityChangeDisableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_RepositoryVisibilityChangeDisableAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepositoryVisibilityChangeEnableAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_EnterpriseAuditEntryData & GitHub_OrganizationAuditEntryData & {
   __typename?: 'GitHub_RepositoryVisibilityChangeEnableAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  enterpriseResourcePath?: Maybe<Scalars['GitHub_URI']>,
  enterpriseSlug?: Maybe<Scalars['String']>,
  enterpriseUrl?: Maybe<Scalars['GitHub_URI']>,
  id: Scalars['ID'],
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_RepositoryVulnerabilityAlert = GitHub_Node & GitHub_RepositoryNode & {
   __typename?: 'GitHub_RepositoryVulnerabilityAlert',
  affectedRange: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  dismissReason?: Maybe<Scalars['String']>,
  dismissedAt?: Maybe<Scalars['GitHub_DateTime']>,
  dismisser?: Maybe<GitHub_User>,
  externalIdentifier?: Maybe<Scalars['String']>,
  externalReference: Scalars['String'],
  fixedIn?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  packageName: Scalars['String'],
  repository: GitHub_Repository,
  securityAdvisory?: Maybe<GitHub_SecurityAdvisory>,
  securityVulnerability?: Maybe<GitHub_SecurityVulnerability>,
  vulnerableManifestFilename: Scalars['String'],
  vulnerableManifestPath: Scalars['String'],
  vulnerableRequirements?: Maybe<Scalars['String']>,
};

export type GitHub_RepositoryVulnerabilityAlertConnection = {
   __typename?: 'GitHub_RepositoryVulnerabilityAlertConnection',
  edges?: Maybe<Array<Maybe<GitHub_RepositoryVulnerabilityAlertEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_RepositoryVulnerabilityAlert>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_RepositoryVulnerabilityAlertEdge = {
   __typename?: 'GitHub_RepositoryVulnerabilityAlertEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_RepositoryVulnerabilityAlert>,
};

export type GitHub_RequestedReviewer = GitHub_Mannequin | GitHub_Team | GitHub_User;

export type GitHub_RequestReviewsInput = {
  pullRequestId: Scalars['ID'],
  userIds?: Maybe<Array<Scalars['ID']>>,
  teamIds?: Maybe<Array<Scalars['ID']>>,
  union?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_RequestReviewsPayload = {
   __typename?: 'GitHub_RequestReviewsPayload',
  actor?: Maybe<GitHub_Actor>,
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
  requestedReviewersEdge?: Maybe<GitHub_UserEdge>,
};

export type GitHub_ResolveReviewThreadInput = {
  threadId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_ResolveReviewThreadPayload = {
   __typename?: 'GitHub_ResolveReviewThreadPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  thread?: Maybe<GitHub_PullRequestReviewThread>,
};

export type GitHub_RestrictedContribution = GitHub_Contribution & {
   __typename?: 'GitHub_RestrictedContribution',
  isRestricted: Scalars['Boolean'],
  occurredAt: Scalars['GitHub_DateTime'],
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
  user: GitHub_User,
};

export type GitHub_ReviewDismissalAllowance = GitHub_Node & {
   __typename?: 'GitHub_ReviewDismissalAllowance',
  actor?: Maybe<GitHub_ReviewDismissalAllowanceActor>,
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>,
  id: Scalars['ID'],
};

export type GitHub_ReviewDismissalAllowanceActor = GitHub_Team | GitHub_User;

export type GitHub_ReviewDismissalAllowanceConnection = {
   __typename?: 'GitHub_ReviewDismissalAllowanceConnection',
  edges?: Maybe<Array<Maybe<GitHub_ReviewDismissalAllowanceEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_ReviewDismissalAllowance>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ReviewDismissalAllowanceEdge = {
   __typename?: 'GitHub_ReviewDismissalAllowanceEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_ReviewDismissalAllowance>,
};

export type GitHub_ReviewDismissedEvent = GitHub_Node & GitHub_UniformResourceLocatable & {
   __typename?: 'GitHub_ReviewDismissedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  dismissalMessage?: Maybe<Scalars['String']>,
  dismissalMessageHTML?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  previousReviewState: GitHub_PullRequestReviewState,
  pullRequest: GitHub_PullRequest,
  pullRequestCommit?: Maybe<GitHub_PullRequestCommit>,
  resourcePath: Scalars['GitHub_URI'],
  review?: Maybe<GitHub_PullRequestReview>,
  url: Scalars['GitHub_URI'],
};

export type GitHub_ReviewRequest = GitHub_Node & {
   __typename?: 'GitHub_ReviewRequest',
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>,
};

export type GitHub_ReviewRequestConnection = {
   __typename?: 'GitHub_ReviewRequestConnection',
  edges?: Maybe<Array<Maybe<GitHub_ReviewRequestEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_ReviewRequest>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_ReviewRequestedEvent = GitHub_Node & {
   __typename?: 'GitHub_ReviewRequestedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>,
};

export type GitHub_ReviewRequestEdge = {
   __typename?: 'GitHub_ReviewRequestEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_ReviewRequest>,
};

export type GitHub_ReviewRequestRemovedEvent = GitHub_Node & {
   __typename?: 'GitHub_ReviewRequestRemovedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  pullRequest: GitHub_PullRequest,
  requestedReviewer?: Maybe<GitHub_RequestedReviewer>,
};

export type GitHub_ReviewStatusHovercardContext = GitHub_HovercardContext & {
   __typename?: 'GitHub_ReviewStatusHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  reviewDecision?: Maybe<GitHub_PullRequestReviewDecision>,
};

export enum GitHub_SamlDigestAlgorithm {
  Sha1 = 'SHA1',
  Sha256 = 'SHA256',
  Sha384 = 'SHA384',
  Sha512 = 'SHA512'
}

export enum GitHub_SamlSignatureAlgorithm {
  RsaSha1 = 'RSA_SHA1',
  RsaSha256 = 'RSA_SHA256',
  RsaSha384 = 'RSA_SHA384',
  RsaSha512 = 'RSA_SHA512'
}

export type GitHub_SavedReply = GitHub_Node & {
   __typename?: 'GitHub_SavedReply',
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  databaseId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  user?: Maybe<GitHub_Actor>,
};

export type GitHub_SavedReplyConnection = {
   __typename?: 'GitHub_SavedReplyConnection',
  edges?: Maybe<Array<Maybe<GitHub_SavedReplyEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_SavedReply>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_SavedReplyEdge = {
   __typename?: 'GitHub_SavedReplyEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_SavedReply>,
};

export type GitHub_SavedReplyOrder = {
  field: GitHub_SavedReplyOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_SavedReplyOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type GitHub_SearchResultItem = GitHub_App | GitHub_Issue | GitHub_MarketplaceListing | GitHub_Organization | GitHub_PullRequest | GitHub_Repository | GitHub_User;

export type GitHub_SearchResultItemConnection = {
   __typename?: 'GitHub_SearchResultItemConnection',
  codeCount: Scalars['Int'],
  edges?: Maybe<Array<Maybe<GitHub_SearchResultItemEdge>>>,
  issueCount: Scalars['Int'],
  nodes?: Maybe<Array<Maybe<GitHub_SearchResultItem>>>,
  pageInfo: GitHub_PageInfo,
  repositoryCount: Scalars['Int'],
  userCount: Scalars['Int'],
  wikiCount: Scalars['Int'],
};

export type GitHub_SearchResultItemEdge = {
   __typename?: 'GitHub_SearchResultItemEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_SearchResultItem>,
  textMatches?: Maybe<Array<Maybe<GitHub_TextMatch>>>,
};

export enum GitHub_SearchType {
  Issue = 'ISSUE',
  Repository = 'REPOSITORY',
  User = 'USER'
}

export type GitHub_SecurityAdvisory = GitHub_Node & {
   __typename?: 'GitHub_SecurityAdvisory',
  databaseId?: Maybe<Scalars['Int']>,
  description: Scalars['String'],
  ghsaId: Scalars['String'],
  id: Scalars['ID'],
  identifiers: Array<GitHub_SecurityAdvisoryIdentifier>,
  origin: Scalars['String'],
  permalink?: Maybe<Scalars['GitHub_URI']>,
  publishedAt: Scalars['GitHub_DateTime'],
  references: Array<GitHub_SecurityAdvisoryReference>,
  severity: GitHub_SecurityAdvisorySeverity,
  summary: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  vulnerabilities: GitHub_SecurityVulnerabilityConnection,
  withdrawnAt?: Maybe<Scalars['GitHub_DateTime']>,
};


export type GitHub_SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: Maybe<GitHub_SecurityVulnerabilityOrder>,
  ecosystem?: Maybe<GitHub_SecurityAdvisoryEcosystem>,
  package?: Maybe<Scalars['String']>,
  severities?: Maybe<Array<GitHub_SecurityAdvisorySeverity>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_SecurityAdvisoryConnection = {
   __typename?: 'GitHub_SecurityAdvisoryConnection',
  edges?: Maybe<Array<Maybe<GitHub_SecurityAdvisoryEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_SecurityAdvisory>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export enum GitHub_SecurityAdvisoryEcosystem {
  Rubygems = 'RUBYGEMS',
  Npm = 'NPM',
  Pip = 'PIP',
  Maven = 'MAVEN',
  Nuget = 'NUGET',
  Composer = 'COMPOSER'
}

export type GitHub_SecurityAdvisoryEdge = {
   __typename?: 'GitHub_SecurityAdvisoryEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_SecurityAdvisory>,
};

export type GitHub_SecurityAdvisoryIdentifier = {
   __typename?: 'GitHub_SecurityAdvisoryIdentifier',
  type: Scalars['String'],
  value: Scalars['String'],
};

export type GitHub_SecurityAdvisoryIdentifierFilter = {
  type: GitHub_SecurityAdvisoryIdentifierType,
  value: Scalars['String'],
};

export enum GitHub_SecurityAdvisoryIdentifierType {
  Cve = 'CVE',
  Ghsa = 'GHSA'
}

export type GitHub_SecurityAdvisoryOrder = {
  field: GitHub_SecurityAdvisoryOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_SecurityAdvisoryOrderField {
  PublishedAt = 'PUBLISHED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type GitHub_SecurityAdvisoryPackage = {
   __typename?: 'GitHub_SecurityAdvisoryPackage',
  ecosystem: GitHub_SecurityAdvisoryEcosystem,
  name: Scalars['String'],
};

export type GitHub_SecurityAdvisoryPackageVersion = {
   __typename?: 'GitHub_SecurityAdvisoryPackageVersion',
  identifier: Scalars['String'],
};

export type GitHub_SecurityAdvisoryReference = {
   __typename?: 'GitHub_SecurityAdvisoryReference',
  url: Scalars['GitHub_URI'],
};

export enum GitHub_SecurityAdvisorySeverity {
  Low = 'LOW',
  Moderate = 'MODERATE',
  High = 'HIGH',
  Critical = 'CRITICAL'
}

export type GitHub_SecurityVulnerability = {
   __typename?: 'GitHub_SecurityVulnerability',
  advisory: GitHub_SecurityAdvisory,
  firstPatchedVersion?: Maybe<GitHub_SecurityAdvisoryPackageVersion>,
  package: GitHub_SecurityAdvisoryPackage,
  severity: GitHub_SecurityAdvisorySeverity,
  updatedAt: Scalars['GitHub_DateTime'],
  vulnerableVersionRange: Scalars['String'],
};

export type GitHub_SecurityVulnerabilityConnection = {
   __typename?: 'GitHub_SecurityVulnerabilityConnection',
  edges?: Maybe<Array<Maybe<GitHub_SecurityVulnerabilityEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_SecurityVulnerability>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_SecurityVulnerabilityEdge = {
   __typename?: 'GitHub_SecurityVulnerabilityEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_SecurityVulnerability>,
};

export type GitHub_SecurityVulnerabilityOrder = {
  field: GitHub_SecurityVulnerabilityOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_SecurityVulnerabilityOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type GitHub_SetEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars['ID'],
  ssoUrl: Scalars['GitHub_URI'],
  issuer?: Maybe<Scalars['String']>,
  idpCertificate: Scalars['String'],
  signatureMethod: GitHub_SamlSignatureAlgorithm,
  digestMethod: GitHub_SamlDigestAlgorithm,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_SetEnterpriseIdentityProviderPayload = {
   __typename?: 'GitHub_SetEnterpriseIdentityProviderPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  identityProvider?: Maybe<GitHub_EnterpriseIdentityProvider>,
};

export type GitHub_SmimeSignature = GitHub_GitSignature & {
   __typename?: 'GitHub_SmimeSignature',
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer?: Maybe<GitHub_User>,
  state: GitHub_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export type GitHub_Sponsorable = {
  sponsorsListing?: Maybe<GitHub_SponsorsListing>,
  sponsorshipsAsMaintainer: GitHub_SponsorshipConnection,
  sponsorshipsAsSponsor: GitHub_SponsorshipConnection,
};


export type GitHub_SponsorableSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};


export type GitHub_SponsorableSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};

export type GitHub_Sponsorship = GitHub_Node & {
   __typename?: 'GitHub_Sponsorship',
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  maintainer: GitHub_User,
  privacyLevel: GitHub_SponsorshipPrivacy,
  sponsor?: Maybe<GitHub_User>,
  sponsorable: GitHub_Sponsorable,
  tier?: Maybe<GitHub_SponsorsTier>,
};

export type GitHub_SponsorshipConnection = {
   __typename?: 'GitHub_SponsorshipConnection',
  edges?: Maybe<Array<Maybe<GitHub_SponsorshipEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Sponsorship>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_SponsorshipEdge = {
   __typename?: 'GitHub_SponsorshipEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Sponsorship>,
};

export type GitHub_SponsorshipOrder = {
  field: GitHub_SponsorshipOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_SponsorshipOrderField {
  CreatedAt = 'CREATED_AT'
}

export enum GitHub_SponsorshipPrivacy {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GitHub_SponsorsListing = GitHub_Node & {
   __typename?: 'GitHub_SponsorsListing',
  createdAt: Scalars['GitHub_DateTime'],
  fullDescription: Scalars['String'],
  fullDescriptionHTML: Scalars['GitHub_HTML'],
  id: Scalars['ID'],
  name: Scalars['String'],
  shortDescription: Scalars['String'],
  slug: Scalars['String'],
  tiers?: Maybe<GitHub_SponsorsTierConnection>,
};


export type GitHub_SponsorsListingTiersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_SponsorsTierOrder>
};

export type GitHub_SponsorsTier = GitHub_Node & {
   __typename?: 'GitHub_SponsorsTier',
  adminInfo?: Maybe<GitHub_SponsorsTierAdminInfo>,
  createdAt: Scalars['GitHub_DateTime'],
  description: Scalars['String'],
  descriptionHTML: Scalars['GitHub_HTML'],
  id: Scalars['ID'],
  monthlyPriceInCents: Scalars['Int'],
  monthlyPriceInDollars: Scalars['Int'],
  name: Scalars['String'],
  sponsorsListing: GitHub_SponsorsListing,
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_SponsorsTierAdminInfo = {
   __typename?: 'GitHub_SponsorsTierAdminInfo',
  sponsorships: GitHub_SponsorshipConnection,
};


export type GitHub_SponsorsTierAdminInfoSponsorshipsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};

export type GitHub_SponsorsTierConnection = {
   __typename?: 'GitHub_SponsorsTierConnection',
  edges?: Maybe<Array<Maybe<GitHub_SponsorsTierEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_SponsorsTier>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_SponsorsTierEdge = {
   __typename?: 'GitHub_SponsorsTierEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_SponsorsTier>,
};

export type GitHub_SponsorsTierOrder = {
  field: GitHub_SponsorsTierOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_SponsorsTierOrderField {
  CreatedAt = 'CREATED_AT',
  MonthlyPriceInCents = 'MONTHLY_PRICE_IN_CENTS'
}

export type GitHub_StargazerConnection = {
   __typename?: 'GitHub_StargazerConnection',
  edges?: Maybe<Array<Maybe<GitHub_StargazerEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_StargazerEdge = {
   __typename?: 'GitHub_StargazerEdge',
  cursor: Scalars['String'],
  node: GitHub_User,
  starredAt: Scalars['GitHub_DateTime'],
};

export type GitHub_StarOrder = {
  field: GitHub_StarOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_StarOrderField {
  StarredAt = 'STARRED_AT'
}

export type GitHub_Starrable = {
  id: Scalars['ID'],
  stargazers: GitHub_StargazerConnection,
  viewerHasStarred: Scalars['Boolean'],
};


export type GitHub_StarrableStargazersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_StarOrder>
};

export type GitHub_StarredRepositoryConnection = {
   __typename?: 'GitHub_StarredRepositoryConnection',
  edges?: Maybe<Array<Maybe<GitHub_StarredRepositoryEdge>>>,
  isOverLimit: Scalars['Boolean'],
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_StarredRepositoryEdge = {
   __typename?: 'GitHub_StarredRepositoryEdge',
  cursor: Scalars['String'],
  node: GitHub_Repository,
  starredAt: Scalars['GitHub_DateTime'],
};

export type GitHub_Status = GitHub_Node & {
   __typename?: 'GitHub_Status',
  commit?: Maybe<GitHub_Commit>,
  context?: Maybe<GitHub_StatusContext>,
  contexts: Array<GitHub_StatusContext>,
  id: Scalars['ID'],
  state: GitHub_StatusState,
};


export type GitHub_StatusContextArgs = {
  name: Scalars['String']
};

export type GitHub_StatusCheckRollup = GitHub_Node & {
   __typename?: 'GitHub_StatusCheckRollup',
  commit?: Maybe<GitHub_Commit>,
  contexts: GitHub_StatusCheckRollupContextConnection,
  id: Scalars['ID'],
  state: GitHub_StatusState,
};


export type GitHub_StatusCheckRollupContextsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_StatusCheckRollupContext = GitHub_StatusContext;

export type GitHub_StatusCheckRollupContextConnection = {
   __typename?: 'GitHub_StatusCheckRollupContextConnection',
  edges?: Maybe<Array<Maybe<GitHub_StatusCheckRollupContextEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_StatusCheckRollupContext>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_StatusCheckRollupContextEdge = {
   __typename?: 'GitHub_StatusCheckRollupContextEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_StatusCheckRollupContext>,
};

export type GitHub_StatusContext = GitHub_Node & {
   __typename?: 'GitHub_StatusContext',
  avatarUrl?: Maybe<Scalars['GitHub_URI']>,
  commit?: Maybe<GitHub_Commit>,
  context: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  creator?: Maybe<GitHub_Actor>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  state: GitHub_StatusState,
  targetUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_StatusContextAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};

export enum GitHub_StatusState {
  Expected = 'EXPECTED',
  Error = 'ERROR',
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type GitHub_SubmitPullRequestReviewInput = {
  pullRequestId?: Maybe<Scalars['ID']>,
  pullRequestReviewId?: Maybe<Scalars['ID']>,
  event: GitHub_PullRequestReviewEvent,
  body?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_SubmitPullRequestReviewPayload = {
   __typename?: 'GitHub_SubmitPullRequestReviewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
};

export type GitHub_Submodule = {
   __typename?: 'GitHub_Submodule',
  branch?: Maybe<Scalars['String']>,
  gitUrl: Scalars['GitHub_URI'],
  name: Scalars['String'],
  path: Scalars['String'],
  subprojectCommitOid?: Maybe<Scalars['GitHub_GitObjectID']>,
};

export type GitHub_SubmoduleConnection = {
   __typename?: 'GitHub_SubmoduleConnection',
  edges?: Maybe<Array<Maybe<GitHub_SubmoduleEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Submodule>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_SubmoduleEdge = {
   __typename?: 'GitHub_SubmoduleEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Submodule>,
};

export type GitHub_Subscribable = {
  id: Scalars['ID'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
};

export type GitHub_SubscribedEvent = GitHub_Node & {
   __typename?: 'GitHub_SubscribedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  subscribable: GitHub_Subscribable,
};

export enum GitHub_SubscriptionState {
  Unsubscribed = 'UNSUBSCRIBED',
  Subscribed = 'SUBSCRIBED',
  Ignored = 'IGNORED'
}

export type GitHub_SuggestedReviewer = {
   __typename?: 'GitHub_SuggestedReviewer',
  isAuthor: Scalars['Boolean'],
  isCommenter: Scalars['Boolean'],
  reviewer: GitHub_User,
};

export type GitHub_Tag = GitHub_Node & GitHub_GitObject & {
   __typename?: 'GitHub_Tag',
  abbreviatedOid: Scalars['String'],
  commitResourcePath: Scalars['GitHub_URI'],
  commitUrl: Scalars['GitHub_URI'],
  id: Scalars['ID'],
  message?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  oid: Scalars['GitHub_GitObjectID'],
  repository: GitHub_Repository,
  tagger?: Maybe<GitHub_GitActor>,
  target: GitHub_GitObject,
};

export type GitHub_Team = GitHub_Node & GitHub_Subscribable & GitHub_MemberStatusable & {
   __typename?: 'GitHub_Team',
  ancestors: GitHub_TeamConnection,
  avatarUrl?: Maybe<Scalars['GitHub_URI']>,
  childTeams: GitHub_TeamConnection,
  combinedSlug: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  description?: Maybe<Scalars['String']>,
  discussion?: Maybe<GitHub_TeamDiscussion>,
  discussions: GitHub_TeamDiscussionConnection,
  discussionsResourcePath: Scalars['GitHub_URI'],
  discussionsUrl: Scalars['GitHub_URI'],
  editTeamResourcePath: Scalars['GitHub_URI'],
  editTeamUrl: Scalars['GitHub_URI'],
  id: Scalars['ID'],
  invitations?: Maybe<GitHub_OrganizationInvitationConnection>,
  memberStatuses: GitHub_UserStatusConnection,
  members: GitHub_TeamMemberConnection,
  membersResourcePath: Scalars['GitHub_URI'],
  membersUrl: Scalars['GitHub_URI'],
  name: Scalars['String'],
  newTeamResourcePath: Scalars['GitHub_URI'],
  newTeamUrl: Scalars['GitHub_URI'],
  organization: GitHub_Organization,
  parentTeam?: Maybe<GitHub_Team>,
  privacy: GitHub_TeamPrivacy,
  repositories: GitHub_TeamRepositoryConnection,
  repositoriesResourcePath: Scalars['GitHub_URI'],
  repositoriesUrl: Scalars['GitHub_URI'],
  resourcePath: Scalars['GitHub_URI'],
  slug: Scalars['String'],
  teamsResourcePath: Scalars['GitHub_URI'],
  teamsUrl: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  viewerCanAdminister: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
};


export type GitHub_TeamAncestorsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_TeamAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type GitHub_TeamChildTeamsArgs = {
  orderBy?: Maybe<GitHub_TeamOrder>,
  userLogins?: Maybe<Array<Scalars['String']>>,
  immediateOnly?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_TeamDiscussionArgs = {
  number: Scalars['Int']
};


export type GitHub_TeamDiscussionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  isPinned?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_TeamDiscussionOrder>
};


export type GitHub_TeamInvitationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_TeamMemberStatusesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_UserStatusOrder>
};


export type GitHub_TeamMembersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  membership?: Maybe<GitHub_TeamMembershipType>,
  role?: Maybe<GitHub_TeamMemberRole>,
  orderBy?: Maybe<GitHub_TeamMemberOrder>
};


export type GitHub_TeamRepositoriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_TeamRepositoryOrder>
};

export type GitHub_TeamAddMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_TeamAuditEntryData & {
   __typename?: 'GitHub_TeamAddMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped?: Maybe<Scalars['Boolean']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_TeamAddRepositoryAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & GitHub_TeamAuditEntryData & {
   __typename?: 'GitHub_TeamAddRepositoryAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped?: Maybe<Scalars['Boolean']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_TeamAuditEntryData = {
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_TeamChangeParentTeamAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_TeamAuditEntryData & {
   __typename?: 'GitHub_TeamChangeParentTeamAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped?: Maybe<Scalars['Boolean']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  parentTeam?: Maybe<GitHub_Team>,
  parentTeamName?: Maybe<Scalars['String']>,
  parentTeamNameWas?: Maybe<Scalars['String']>,
  parentTeamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  parentTeamUrl?: Maybe<Scalars['GitHub_URI']>,
  parentTeamWas?: Maybe<GitHub_Team>,
  parentTeamWasResourcePath?: Maybe<Scalars['GitHub_URI']>,
  parentTeamWasUrl?: Maybe<Scalars['GitHub_URI']>,
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_TeamConnection = {
   __typename?: 'GitHub_TeamConnection',
  edges?: Maybe<Array<Maybe<GitHub_TeamEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Team>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_TeamDiscussion = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Reactable & GitHub_Subscribable & GitHub_UniformResourceLocatable & GitHub_Updatable & GitHub_UpdatableComment & {
   __typename?: 'GitHub_TeamDiscussion',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  bodyVersion: Scalars['String'],
  comments: GitHub_TeamDiscussionCommentConnection,
  commentsResourcePath: Scalars['GitHub_URI'],
  commentsUrl: Scalars['GitHub_URI'],
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  isPinned: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  number: Scalars['Int'],
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  resourcePath: Scalars['GitHub_URI'],
  team: GitHub_Team,
  title: Scalars['String'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanPin: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanSubscribe: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
  viewerSubscription?: Maybe<GitHub_SubscriptionState>,
};


export type GitHub_TeamDiscussionCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_TeamDiscussionCommentOrder>,
  fromComment?: Maybe<Scalars['Int']>
};


export type GitHub_TeamDiscussionReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_TeamDiscussionUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_TeamDiscussionComment = GitHub_Node & GitHub_Comment & GitHub_Deletable & GitHub_Reactable & GitHub_UniformResourceLocatable & GitHub_Updatable & GitHub_UpdatableComment & {
   __typename?: 'GitHub_TeamDiscussionComment',
  author?: Maybe<GitHub_Actor>,
  authorAssociation: GitHub_CommentAuthorAssociation,
  body: Scalars['String'],
  bodyHTML: Scalars['GitHub_HTML'],
  bodyText: Scalars['String'],
  bodyVersion: Scalars['String'],
  createdAt: Scalars['GitHub_DateTime'],
  createdViaEmail: Scalars['Boolean'],
  databaseId?: Maybe<Scalars['Int']>,
  discussion: GitHub_TeamDiscussion,
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  includesCreatedEdit: Scalars['Boolean'],
  lastEditedAt?: Maybe<Scalars['GitHub_DateTime']>,
  number: Scalars['Int'],
  publishedAt?: Maybe<Scalars['GitHub_DateTime']>,
  reactionGroups?: Maybe<Array<GitHub_ReactionGroup>>,
  reactions: GitHub_ReactionConnection,
  resourcePath: Scalars['GitHub_URI'],
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  userContentEdits?: Maybe<GitHub_UserContentEditConnection>,
  viewerCanDelete: Scalars['Boolean'],
  viewerCanReact: Scalars['Boolean'],
  viewerCanUpdate: Scalars['Boolean'],
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
  viewerDidAuthor: Scalars['Boolean'],
};


export type GitHub_TeamDiscussionCommentReactionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  content?: Maybe<GitHub_ReactionContent>,
  orderBy?: Maybe<GitHub_ReactionOrder>
};


export type GitHub_TeamDiscussionCommentUserContentEditsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GitHub_TeamDiscussionCommentConnection = {
   __typename?: 'GitHub_TeamDiscussionCommentConnection',
  edges?: Maybe<Array<Maybe<GitHub_TeamDiscussionCommentEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_TeamDiscussionComment>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_TeamDiscussionCommentEdge = {
   __typename?: 'GitHub_TeamDiscussionCommentEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_TeamDiscussionComment>,
};

export type GitHub_TeamDiscussionCommentOrder = {
  field: GitHub_TeamDiscussionCommentOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_TeamDiscussionCommentOrderField {
  Number = 'NUMBER'
}

export type GitHub_TeamDiscussionConnection = {
   __typename?: 'GitHub_TeamDiscussionConnection',
  edges?: Maybe<Array<Maybe<GitHub_TeamDiscussionEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_TeamDiscussion>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_TeamDiscussionEdge = {
   __typename?: 'GitHub_TeamDiscussionEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_TeamDiscussion>,
};

export type GitHub_TeamDiscussionOrder = {
  field: GitHub_TeamDiscussionOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_TeamDiscussionOrderField {
  CreatedAt = 'CREATED_AT'
}

export type GitHub_TeamEdge = {
   __typename?: 'GitHub_TeamEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Team>,
};

export type GitHub_TeamMemberConnection = {
   __typename?: 'GitHub_TeamMemberConnection',
  edges?: Maybe<Array<Maybe<GitHub_TeamMemberEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_TeamMemberEdge = {
   __typename?: 'GitHub_TeamMemberEdge',
  cursor: Scalars['String'],
  memberAccessResourcePath: Scalars['GitHub_URI'],
  memberAccessUrl: Scalars['GitHub_URI'],
  node: GitHub_User,
  role: GitHub_TeamMemberRole,
};

export type GitHub_TeamMemberOrder = {
  field: GitHub_TeamMemberOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_TeamMemberOrderField {
  Login = 'LOGIN',
  CreatedAt = 'CREATED_AT'
}

export enum GitHub_TeamMemberRole {
  Maintainer = 'MAINTAINER',
  Member = 'MEMBER'
}

export enum GitHub_TeamMembershipType {
  Immediate = 'IMMEDIATE',
  ChildTeam = 'CHILD_TEAM',
  All = 'ALL'
}

export type GitHub_TeamOrder = {
  field: GitHub_TeamOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_TeamOrderField {
  Name = 'NAME'
}

export enum GitHub_TeamPrivacy {
  Secret = 'SECRET',
  Visible = 'VISIBLE'
}

export type GitHub_TeamRemoveMemberAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_TeamAuditEntryData & {
   __typename?: 'GitHub_TeamRemoveMemberAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped?: Maybe<Scalars['Boolean']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_TeamRemoveRepositoryAuditEntry = GitHub_Node & GitHub_AuditEntry & GitHub_OrganizationAuditEntryData & GitHub_RepositoryAuditEntryData & GitHub_TeamAuditEntryData & {
   __typename?: 'GitHub_TeamRemoveRepositoryAuditEntry',
  action: Scalars['String'],
  actor?: Maybe<GitHub_AuditEntryActor>,
  actorIp?: Maybe<Scalars['String']>,
  actorLocation?: Maybe<GitHub_ActorLocation>,
  actorLogin?: Maybe<Scalars['String']>,
  actorResourcePath?: Maybe<Scalars['GitHub_URI']>,
  actorUrl?: Maybe<Scalars['GitHub_URI']>,
  createdAt: Scalars['GitHub_PreciseDateTime'],
  id: Scalars['ID'],
  isLdapMapped?: Maybe<Scalars['Boolean']>,
  operationType?: Maybe<GitHub_OperationType>,
  organization?: Maybe<GitHub_Organization>,
  organizationName?: Maybe<Scalars['String']>,
  organizationResourcePath?: Maybe<Scalars['GitHub_URI']>,
  organizationUrl?: Maybe<Scalars['GitHub_URI']>,
  repository?: Maybe<GitHub_Repository>,
  repositoryName?: Maybe<Scalars['String']>,
  repositoryResourcePath?: Maybe<Scalars['GitHub_URI']>,
  repositoryUrl?: Maybe<Scalars['GitHub_URI']>,
  team?: Maybe<GitHub_Team>,
  teamName?: Maybe<Scalars['String']>,
  teamResourcePath?: Maybe<Scalars['GitHub_URI']>,
  teamUrl?: Maybe<Scalars['GitHub_URI']>,
  user?: Maybe<GitHub_User>,
  userLogin?: Maybe<Scalars['String']>,
  userResourcePath?: Maybe<Scalars['GitHub_URI']>,
  userUrl?: Maybe<Scalars['GitHub_URI']>,
};

export type GitHub_TeamRepositoryConnection = {
   __typename?: 'GitHub_TeamRepositoryConnection',
  edges?: Maybe<Array<Maybe<GitHub_TeamRepositoryEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Repository>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_TeamRepositoryEdge = {
   __typename?: 'GitHub_TeamRepositoryEdge',
  cursor: Scalars['String'],
  node: GitHub_Repository,
  permission: GitHub_RepositoryPermission,
};

export type GitHub_TeamRepositoryOrder = {
  field: GitHub_TeamRepositoryOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_TeamRepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Permission = 'PERMISSION',
  Stargazers = 'STARGAZERS'
}

export enum GitHub_TeamRole {
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type GitHub_TextMatch = {
   __typename?: 'GitHub_TextMatch',
  fragment: Scalars['String'],
  highlights: Array<GitHub_TextMatchHighlight>,
  property: Scalars['String'],
};

export type GitHub_TextMatchHighlight = {
   __typename?: 'GitHub_TextMatchHighlight',
  beginIndice: Scalars['Int'],
  endIndice: Scalars['Int'],
  text: Scalars['String'],
};

export type GitHub_Topic = GitHub_Node & GitHub_Starrable & {
   __typename?: 'GitHub_Topic',
  id: Scalars['ID'],
  name: Scalars['String'],
  relatedTopics: Array<GitHub_Topic>,
  stargazers: GitHub_StargazerConnection,
  viewerHasStarred: Scalars['Boolean'],
};


export type GitHub_TopicRelatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>
};


export type GitHub_TopicStargazersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_StarOrder>
};

export type GitHub_TopicAuditEntryData = {
  topic?: Maybe<GitHub_Topic>,
  topicName?: Maybe<Scalars['String']>,
};

export type GitHub_TopicConnection = {
   __typename?: 'GitHub_TopicConnection',
  edges?: Maybe<Array<Maybe<GitHub_TopicEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_Topic>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_TopicEdge = {
   __typename?: 'GitHub_TopicEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_Topic>,
};

export enum GitHub_TopicSuggestionDeclineReason {
  NotRelevant = 'NOT_RELEVANT',
  TooSpecific = 'TOO_SPECIFIC',
  PersonalPreference = 'PERSONAL_PREFERENCE',
  TooGeneral = 'TOO_GENERAL'
}

export type GitHub_TransferIssueInput = {
  issueId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_TransferIssuePayload = {
   __typename?: 'GitHub_TransferIssuePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  issue?: Maybe<GitHub_Issue>,
};

export type GitHub_TransferredEvent = GitHub_Node & {
   __typename?: 'GitHub_TransferredEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  fromRepository?: Maybe<GitHub_Repository>,
  id: Scalars['ID'],
  issue: GitHub_Issue,
};

export type GitHub_Tree = GitHub_Node & GitHub_GitObject & {
   __typename?: 'GitHub_Tree',
  abbreviatedOid: Scalars['String'],
  commitResourcePath: Scalars['GitHub_URI'],
  commitUrl: Scalars['GitHub_URI'],
  entries?: Maybe<Array<GitHub_TreeEntry>>,
  id: Scalars['ID'],
  oid: Scalars['GitHub_GitObjectID'],
  repository: GitHub_Repository,
};

export type GitHub_TreeEntry = {
   __typename?: 'GitHub_TreeEntry',
  mode: Scalars['Int'],
  name: Scalars['String'],
  object?: Maybe<GitHub_GitObject>,
  oid: Scalars['GitHub_GitObjectID'],
  repository: GitHub_Repository,
  submodule?: Maybe<GitHub_Submodule>,
  type: Scalars['String'],
};

export type GitHub_UnarchiveRepositoryInput = {
  repositoryId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnarchiveRepositoryPayload = {
   __typename?: 'GitHub_UnarchiveRepositoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_UnassignedEvent = GitHub_Node & {
   __typename?: 'GitHub_UnassignedEvent',
  actor?: Maybe<GitHub_Actor>,
  assignable: GitHub_Assignable,
  assignee?: Maybe<GitHub_Assignee>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  user?: Maybe<GitHub_User>,
};

export type GitHub_UnfollowUserInput = {
  userId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnfollowUserPayload = {
   __typename?: 'GitHub_UnfollowUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<GitHub_User>,
};

export type GitHub_UniformResourceLocatable = {
  resourcePath: Scalars['GitHub_URI'],
  url: Scalars['GitHub_URI'],
};

export type GitHub_UnknownSignature = GitHub_GitSignature & {
   __typename?: 'GitHub_UnknownSignature',
  email: Scalars['String'],
  isValid: Scalars['Boolean'],
  payload: Scalars['String'],
  signature: Scalars['String'],
  signer?: Maybe<GitHub_User>,
  state: GitHub_GitSignatureState,
  wasSignedByGitHub: Scalars['Boolean'],
};

export type GitHub_UnlabeledEvent = GitHub_Node & {
   __typename?: 'GitHub_UnlabeledEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  label: GitHub_Label,
  labelable: GitHub_Labelable,
};

export type GitHub_UnlinkRepositoryFromProjectInput = {
  projectId: Scalars['ID'],
  repositoryId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnlinkRepositoryFromProjectPayload = {
   __typename?: 'GitHub_UnlinkRepositoryFromProjectPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  project?: Maybe<GitHub_Project>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_UnlockedEvent = GitHub_Node & {
   __typename?: 'GitHub_UnlockedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  lockable: GitHub_Lockable,
};

export type GitHub_UnlockLockableInput = {
  lockableId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnlockLockablePayload = {
   __typename?: 'GitHub_UnlockLockablePayload',
  actor?: Maybe<GitHub_Actor>,
  clientMutationId?: Maybe<Scalars['String']>,
  unlockedRecord?: Maybe<GitHub_Lockable>,
};

export type GitHub_UnmarkedAsDuplicateEvent = GitHub_Node & {
   __typename?: 'GitHub_UnmarkedAsDuplicateEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
};

export type GitHub_UnmarkIssueAsDuplicateInput = {
  duplicateId: Scalars['ID'],
  canonicalId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnmarkIssueAsDuplicatePayload = {
   __typename?: 'GitHub_UnmarkIssueAsDuplicatePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  duplicate?: Maybe<GitHub_IssueOrPullRequest>,
};

export type GitHub_UnminimizeCommentInput = {
  subjectId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnminimizeCommentPayload = {
   __typename?: 'GitHub_UnminimizeCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  unminimizedComment?: Maybe<GitHub_Minimizable>,
};

export type GitHub_UnpinnedEvent = GitHub_Node & {
   __typename?: 'GitHub_UnpinnedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  issue: GitHub_Issue,
};

export type GitHub_UnresolveReviewThreadInput = {
  threadId: Scalars['ID'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UnresolveReviewThreadPayload = {
   __typename?: 'GitHub_UnresolveReviewThreadPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  thread?: Maybe<GitHub_PullRequestReviewThread>,
};

export type GitHub_UnsubscribedEvent = GitHub_Node & {
   __typename?: 'GitHub_UnsubscribedEvent',
  actor?: Maybe<GitHub_Actor>,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  subscribable: GitHub_Subscribable,
};

export type GitHub_Updatable = {
  viewerCanUpdate: Scalars['Boolean'],
};

export type GitHub_UpdatableComment = {
  viewerCannotUpdateReasons: Array<GitHub_CommentCannotUpdateReason>,
};

export type GitHub_UpdateBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars['ID'],
  pattern?: Maybe<Scalars['String']>,
  requiresApprovingReviews?: Maybe<Scalars['Boolean']>,
  requiredApprovingReviewCount?: Maybe<Scalars['Int']>,
  requiresCommitSignatures?: Maybe<Scalars['Boolean']>,
  isAdminEnforced?: Maybe<Scalars['Boolean']>,
  requiresStatusChecks?: Maybe<Scalars['Boolean']>,
  requiresStrictStatusChecks?: Maybe<Scalars['Boolean']>,
  requiresCodeOwnerReviews?: Maybe<Scalars['Boolean']>,
  dismissesStaleReviews?: Maybe<Scalars['Boolean']>,
  restrictsReviewDismissals?: Maybe<Scalars['Boolean']>,
  reviewDismissalActorIds?: Maybe<Array<Scalars['ID']>>,
  restrictsPushes?: Maybe<Scalars['Boolean']>,
  pushActorIds?: Maybe<Array<Scalars['ID']>>,
  requiredStatusCheckContexts?: Maybe<Array<Scalars['String']>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateBranchProtectionRulePayload = {
   __typename?: 'GitHub_UpdateBranchProtectionRulePayload',
  branchProtectionRule?: Maybe<GitHub_BranchProtectionRule>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  enterpriseId: Scalars['ID'],
  capability: GitHub_ActionExecutionCapabilitySetting,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseActionExecutionCapabilitySettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseAdministratorRoleInput = {
  enterpriseId: Scalars['ID'],
  login: Scalars['String'],
  role: GitHub_EnterpriseAdministratorRole,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseAdministratorRolePayload = {
   __typename?: 'GitHub_UpdateEnterpriseAdministratorRolePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseDefaultRepositoryPermissionSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue?: Maybe<GitHub_EnterpriseMembersCanCreateRepositoriesSettingValue>,
  membersCanCreateRepositoriesPolicyEnabled?: Maybe<Scalars['Boolean']>,
  membersCanCreatePublicRepositories?: Maybe<Scalars['Boolean']>,
  membersCanCreatePrivateRepositories?: Maybe<Scalars['Boolean']>,
  membersCanCreateInternalRepositories?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseMembersCanMakePurchasesSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanMakePurchasesSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseOrganizationProjectsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseOrganizationProjectsSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseOrganizationProjectsSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseProfileInput = {
  enterpriseId: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  websiteUrl?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseProfilePayload = {
   __typename?: 'GitHub_UpdateEnterpriseProfilePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
};

export type GitHub_UpdateEnterpriseRepositoryProjectsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseRepositoryProjectsSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseRepositoryProjectsSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseTeamDiscussionsSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledDisabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseTeamDiscussionsSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseTeamDiscussionsSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  enterpriseId: Scalars['ID'],
  settingValue: GitHub_EnterpriseEnabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
   __typename?: 'GitHub_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enterprise?: Maybe<GitHub_Enterprise>,
  message?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateIpAllowListEnabledSettingInput = {
  ownerId: Scalars['ID'],
  settingValue: GitHub_IpAllowListEnabledSettingValue,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateIpAllowListEnabledSettingPayload = {
   __typename?: 'GitHub_UpdateIpAllowListEnabledSettingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  owner?: Maybe<GitHub_IpAllowListOwner>,
};

export type GitHub_UpdateIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars['ID'],
  allowListValue: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  isActive: Scalars['Boolean'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateIpAllowListEntryPayload = {
   __typename?: 'GitHub_UpdateIpAllowListEntryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  ipAllowListEntry?: Maybe<GitHub_IpAllowListEntry>,
};

export type GitHub_UpdateIssueCommentInput = {
  id: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateIssueCommentPayload = {
   __typename?: 'GitHub_UpdateIssueCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  issueComment?: Maybe<GitHub_IssueComment>,
};

export type GitHub_UpdateIssueInput = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  assigneeIds?: Maybe<Array<Scalars['ID']>>,
  milestoneId?: Maybe<Scalars['ID']>,
  labelIds?: Maybe<Array<Scalars['ID']>>,
  state?: Maybe<GitHub_IssueState>,
  projectIds?: Maybe<Array<Scalars['ID']>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateIssuePayload = {
   __typename?: 'GitHub_UpdateIssuePayload',
  actor?: Maybe<GitHub_Actor>,
  clientMutationId?: Maybe<Scalars['String']>,
  issue?: Maybe<GitHub_Issue>,
};

export type GitHub_UpdateProjectCardInput = {
  projectCardId: Scalars['ID'],
  isArchived?: Maybe<Scalars['Boolean']>,
  note?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateProjectCardPayload = {
   __typename?: 'GitHub_UpdateProjectCardPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  projectCard?: Maybe<GitHub_ProjectCard>,
};

export type GitHub_UpdateProjectColumnInput = {
  projectColumnId: Scalars['ID'],
  name: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateProjectColumnPayload = {
   __typename?: 'GitHub_UpdateProjectColumnPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  projectColumn?: Maybe<GitHub_ProjectColumn>,
};

export type GitHub_UpdateProjectInput = {
  projectId: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<GitHub_ProjectState>,
  public?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateProjectPayload = {
   __typename?: 'GitHub_UpdateProjectPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  project?: Maybe<GitHub_Project>,
};

export type GitHub_UpdatePullRequestInput = {
  pullRequestId: Scalars['ID'],
  baseRefName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<GitHub_PullRequestUpdateState>,
  maintainerCanModify?: Maybe<Scalars['Boolean']>,
  assigneeIds?: Maybe<Array<Scalars['ID']>>,
  milestoneId?: Maybe<Scalars['ID']>,
  labelIds?: Maybe<Array<Scalars['ID']>>,
  projectIds?: Maybe<Array<Scalars['ID']>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdatePullRequestPayload = {
   __typename?: 'GitHub_UpdatePullRequestPayload',
  actor?: Maybe<GitHub_Actor>,
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequest?: Maybe<GitHub_PullRequest>,
};

export type GitHub_UpdatePullRequestReviewCommentInput = {
  pullRequestReviewCommentId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdatePullRequestReviewCommentPayload = {
   __typename?: 'GitHub_UpdatePullRequestReviewCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReviewComment?: Maybe<GitHub_PullRequestReviewComment>,
};

export type GitHub_UpdatePullRequestReviewInput = {
  pullRequestReviewId: Scalars['ID'],
  body: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdatePullRequestReviewPayload = {
   __typename?: 'GitHub_UpdatePullRequestReviewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  pullRequestReview?: Maybe<GitHub_PullRequestReview>,
};

export type GitHub_UpdateRefInput = {
  refId: Scalars['ID'],
  oid: Scalars['GitHub_GitObjectID'],
  force?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateRefPayload = {
   __typename?: 'GitHub_UpdateRefPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  ref?: Maybe<GitHub_Ref>,
};

export type GitHub_UpdateRepositoryInput = {
  repositoryId: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['Boolean']>,
  homepageUrl?: Maybe<Scalars['GitHub_URI']>,
  hasWikiEnabled?: Maybe<Scalars['Boolean']>,
  hasIssuesEnabled?: Maybe<Scalars['Boolean']>,
  hasProjectsEnabled?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateRepositoryPayload = {
   __typename?: 'GitHub_UpdateRepositoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  repository?: Maybe<GitHub_Repository>,
};

export type GitHub_UpdateSubscriptionInput = {
  subscribableId: Scalars['ID'],
  state: GitHub_SubscriptionState,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateSubscriptionPayload = {
   __typename?: 'GitHub_UpdateSubscriptionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  subscribable?: Maybe<GitHub_Subscribable>,
};

export type GitHub_UpdateTeamDiscussionCommentInput = {
  id: Scalars['ID'],
  body: Scalars['String'],
  bodyVersion?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateTeamDiscussionCommentPayload = {
   __typename?: 'GitHub_UpdateTeamDiscussionCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  teamDiscussionComment?: Maybe<GitHub_TeamDiscussionComment>,
};

export type GitHub_UpdateTeamDiscussionInput = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  bodyVersion?: Maybe<Scalars['String']>,
  pinned?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateTeamDiscussionPayload = {
   __typename?: 'GitHub_UpdateTeamDiscussionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  teamDiscussion?: Maybe<GitHub_TeamDiscussion>,
};

export type GitHub_UpdateTopicsInput = {
  repositoryId: Scalars['ID'],
  topicNames: Array<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type GitHub_UpdateTopicsPayload = {
   __typename?: 'GitHub_UpdateTopicsPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invalidTopicNames?: Maybe<Array<Scalars['String']>>,
  repository?: Maybe<GitHub_Repository>,
};


export type GitHub_User = GitHub_Node & GitHub_Actor & GitHub_RegistryPackageOwner & GitHub_RegistryPackageSearch & GitHub_ProjectOwner & GitHub_RepositoryOwner & GitHub_UniformResourceLocatable & GitHub_ProfileOwner & GitHub_Sponsorable & {
   __typename?: 'GitHub_User',
  anyPinnableItems: Scalars['Boolean'],
  avatarUrl: Scalars['GitHub_URI'],
  bio?: Maybe<Scalars['String']>,
  bioHTML: Scalars['GitHub_HTML'],
  commitComments: GitHub_CommitCommentConnection,
  company?: Maybe<Scalars['String']>,
  companyHTML: Scalars['GitHub_HTML'],
  contributionsCollection: GitHub_ContributionsCollection,
  createdAt: Scalars['GitHub_DateTime'],
  databaseId?: Maybe<Scalars['Int']>,
  email: Scalars['String'],
  followers: GitHub_FollowerConnection,
  following: GitHub_FollowingConnection,
  gist?: Maybe<GitHub_Gist>,
  gistComments: GitHub_GistCommentConnection,
  gists: GitHub_GistConnection,
  hovercard: GitHub_Hovercard,
  id: Scalars['ID'],
  isBountyHunter: Scalars['Boolean'],
  isCampusExpert: Scalars['Boolean'],
  isDeveloperProgramMember: Scalars['Boolean'],
  isEmployee: Scalars['Boolean'],
  isHireable: Scalars['Boolean'],
  isSiteAdmin: Scalars['Boolean'],
  isViewer: Scalars['Boolean'],
  issueComments: GitHub_IssueCommentConnection,
  issues: GitHub_IssueConnection,
  itemShowcase: GitHub_ProfileItemShowcase,
  location?: Maybe<Scalars['String']>,
  login: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  organization?: Maybe<GitHub_Organization>,
  organizations: GitHub_OrganizationConnection,
  pinnableItems: GitHub_PinnableItemConnection,
  pinnedItems: GitHub_PinnableItemConnection,
  pinnedItemsRemaining: Scalars['Int'],
  pinnedRepositories: GitHub_RepositoryConnection,
  project?: Maybe<GitHub_Project>,
  projects: GitHub_ProjectConnection,
  projectsResourcePath: Scalars['GitHub_URI'],
  projectsUrl: Scalars['GitHub_URI'],
  publicKeys: GitHub_PublicKeyConnection,
  pullRequests: GitHub_PullRequestConnection,
  registryPackages: GitHub_RegistryPackageConnection,
  registryPackagesForQuery: GitHub_RegistryPackageConnection,
  repositories: GitHub_RepositoryConnection,
  repositoriesContributedTo: GitHub_RepositoryConnection,
  repository?: Maybe<GitHub_Repository>,
  resourcePath: Scalars['GitHub_URI'],
  savedReplies?: Maybe<GitHub_SavedReplyConnection>,
  sponsorsListing?: Maybe<GitHub_SponsorsListing>,
  sponsorshipsAsMaintainer: GitHub_SponsorshipConnection,
  sponsorshipsAsSponsor: GitHub_SponsorshipConnection,
  starredRepositories: GitHub_StarredRepositoryConnection,
  status?: Maybe<GitHub_UserStatus>,
  topRepositories: GitHub_RepositoryConnection,
  updatedAt: Scalars['GitHub_DateTime'],
  url: Scalars['GitHub_URI'],
  viewerCanChangePinnedItems: Scalars['Boolean'],
  viewerCanCreateProjects: Scalars['Boolean'],
  viewerCanFollow: Scalars['Boolean'],
  viewerIsFollowing: Scalars['Boolean'],
  watching: GitHub_RepositoryConnection,
  websiteUrl?: Maybe<Scalars['GitHub_URI']>,
};


export type GitHub_UserAnyPinnableItemsArgs = {
  type?: Maybe<GitHub_PinnableItemType>
};


export type GitHub_UserAvatarUrlArgs = {
  size?: Maybe<Scalars['Int']>
};


export type GitHub_UserCommitCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserContributionsCollectionArgs = {
  organizationID?: Maybe<Scalars['ID']>,
  from?: Maybe<Scalars['GitHub_DateTime']>,
  to?: Maybe<Scalars['GitHub_DateTime']>
};


export type GitHub_UserFollowersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserFollowingArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserGistArgs = {
  name: Scalars['String']
};


export type GitHub_UserGistCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserGistsArgs = {
  privacy?: Maybe<GitHub_GistPrivacy>,
  orderBy?: Maybe<GitHub_GistOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserHovercardArgs = {
  primarySubjectId?: Maybe<Scalars['ID']>
};


export type GitHub_UserIssueCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserIssuesArgs = {
  orderBy?: Maybe<GitHub_IssueOrder>,
  labels?: Maybe<Array<Scalars['String']>>,
  states?: Maybe<Array<GitHub_IssueState>>,
  filterBy?: Maybe<GitHub_IssueFilters>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserOrganizationArgs = {
  login: Scalars['String']
};


export type GitHub_UserOrganizationsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserPinnableItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserPinnedItemsArgs = {
  types?: Maybe<Array<GitHub_PinnableItemType>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserPinnedRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserProjectArgs = {
  number: Scalars['Int']
};


export type GitHub_UserProjectsArgs = {
  orderBy?: Maybe<GitHub_ProjectOrder>,
  search?: Maybe<Scalars['String']>,
  states?: Maybe<Array<GitHub_ProjectState>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserPublicKeysArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserPullRequestsArgs = {
  states?: Maybe<Array<GitHub_PullRequestState>>,
  labels?: Maybe<Array<Scalars['String']>>,
  headRefName?: Maybe<Scalars['String']>,
  baseRefName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<GitHub_IssueOrder>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserRegistryPackagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  repositoryId?: Maybe<Scalars['ID']>,
  packageType?: Maybe<GitHub_RegistryPackageType>,
  registryPackageType?: Maybe<Scalars['String']>,
  publicOnly?: Maybe<Scalars['Boolean']>
};


export type GitHub_UserRegistryPackagesForQueryArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  packageType?: Maybe<GitHub_RegistryPackageType>
};


export type GitHub_UserRepositoriesArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  isFork?: Maybe<Scalars['Boolean']>
};


export type GitHub_UserRepositoriesContributedToArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  isLocked?: Maybe<Scalars['Boolean']>,
  includeUserRepositories?: Maybe<Scalars['Boolean']>,
  contributionTypes?: Maybe<Array<Maybe<GitHub_RepositoryContributionType>>>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GitHub_UserRepositoryArgs = {
  name: Scalars['String']
};


export type GitHub_UserSavedRepliesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_SavedReplyOrder>
};


export type GitHub_UserSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  includePrivate?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};


export type GitHub_UserSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<GitHub_SponsorshipOrder>
};


export type GitHub_UserStarredRepositoriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  ownedByViewer?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<GitHub_StarOrder>
};


export type GitHub_UserTopRepositoriesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy: GitHub_RepositoryOrder,
  since?: Maybe<Scalars['GitHub_DateTime']>
};


export type GitHub_UserWatchingArgs = {
  privacy?: Maybe<GitHub_RepositoryPrivacy>,
  orderBy?: Maybe<GitHub_RepositoryOrder>,
  affiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  ownerAffiliations?: Maybe<Array<Maybe<GitHub_RepositoryAffiliation>>>,
  isLocked?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum GitHub_UserBlockDuration {
  OneDay = 'ONE_DAY',
  ThreeDays = 'THREE_DAYS',
  OneWeek = 'ONE_WEEK',
  OneMonth = 'ONE_MONTH',
  Permanent = 'PERMANENT'
}

export type GitHub_UserBlockedEvent = GitHub_Node & {
   __typename?: 'GitHub_UserBlockedEvent',
  actor?: Maybe<GitHub_Actor>,
  blockDuration: GitHub_UserBlockDuration,
  createdAt: Scalars['GitHub_DateTime'],
  id: Scalars['ID'],
  subject?: Maybe<GitHub_User>,
};

export type GitHub_UserConnection = {
   __typename?: 'GitHub_UserConnection',
  edges?: Maybe<Array<Maybe<GitHub_UserEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_User>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_UserContentEdit = GitHub_Node & {
   __typename?: 'GitHub_UserContentEdit',
  createdAt: Scalars['GitHub_DateTime'],
  deletedAt?: Maybe<Scalars['GitHub_DateTime']>,
  deletedBy?: Maybe<GitHub_Actor>,
  diff?: Maybe<Scalars['String']>,
  editedAt: Scalars['GitHub_DateTime'],
  editor?: Maybe<GitHub_Actor>,
  id: Scalars['ID'],
  updatedAt: Scalars['GitHub_DateTime'],
};

export type GitHub_UserContentEditConnection = {
   __typename?: 'GitHub_UserContentEditConnection',
  edges?: Maybe<Array<Maybe<GitHub_UserContentEditEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_UserContentEdit>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_UserContentEditEdge = {
   __typename?: 'GitHub_UserContentEditEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_UserContentEdit>,
};

export type GitHub_UserEdge = {
   __typename?: 'GitHub_UserEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_User>,
};

export type GitHub_UserStatus = GitHub_Node & {
   __typename?: 'GitHub_UserStatus',
  createdAt: Scalars['GitHub_DateTime'],
  emoji?: Maybe<Scalars['String']>,
  emojiHTML?: Maybe<Scalars['GitHub_HTML']>,
  expiresAt?: Maybe<Scalars['GitHub_DateTime']>,
  id: Scalars['ID'],
  indicatesLimitedAvailability: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
  organization?: Maybe<GitHub_Organization>,
  updatedAt: Scalars['GitHub_DateTime'],
  user: GitHub_User,
};

export type GitHub_UserStatusConnection = {
   __typename?: 'GitHub_UserStatusConnection',
  edges?: Maybe<Array<Maybe<GitHub_UserStatusEdge>>>,
  nodes?: Maybe<Array<Maybe<GitHub_UserStatus>>>,
  pageInfo: GitHub_PageInfo,
  totalCount: Scalars['Int'],
};

export type GitHub_UserStatusEdge = {
   __typename?: 'GitHub_UserStatusEdge',
  cursor: Scalars['String'],
  node?: Maybe<GitHub_UserStatus>,
};

export type GitHub_UserStatusOrder = {
  field: GitHub_UserStatusOrderField,
  direction: GitHub_OrderDirection,
};

export enum GitHub_UserStatusOrderField {
  UpdatedAt = 'UPDATED_AT'
}

export type GitHub_ViewerHovercardContext = GitHub_HovercardContext & {
   __typename?: 'GitHub_ViewerHovercardContext',
  message: Scalars['String'],
  octicon: Scalars['String'],
  viewer: GitHub_User,
};


export type GoodreadsAuthor = Node & {
   __typename?: 'GoodreadsAuthor',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  image_url?: Maybe<Scalars['String']>,
  small_image_url?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  average_rating?: Maybe<Scalars['String']>,
  ratings_count?: Maybe<Scalars['String']>,
  text_reviews_count?: Maybe<Scalars['String']>,
  goodreadsId?: Maybe<Scalars['String']>,
  books?: Maybe<Array<Maybe<GoodreadsBook>>>,
};

export type GoodreadsAuthorConnection = {
   __typename?: 'GoodreadsAuthorConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsAuthorEdge>,
  nodes: Array<GoodreadsAuthor>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GoodreadsAuthorGroupConnection>,
};


export type GoodreadsAuthorConnectionDistinctArgs = {
  field: GoodreadsAuthorFieldsEnum
};


export type GoodreadsAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GoodreadsAuthorFieldsEnum
};

export type GoodreadsAuthorEdge = {
   __typename?: 'GoodreadsAuthorEdge',
  next?: Maybe<GoodreadsAuthor>,
  node: GoodreadsAuthor,
  previous?: Maybe<GoodreadsAuthor>,
};

export enum GoodreadsAuthorFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Role = 'role',
  ImageUrl = 'image_url',
  SmallImageUrl = 'small_image_url',
  Link = 'link',
  AverageRating = 'average_rating',
  RatingsCount = 'ratings_count',
  TextReviewsCount = 'text_reviews_count',
  GoodreadsId = 'goodreadsId',
  Books = 'books',
  BooksId = 'books___id',
  BooksParentId = 'books___parent___id',
  BooksParentParentId = 'books___parent___parent___id',
  BooksParentParentChildren = 'books___parent___parent___children',
  BooksParentChildren = 'books___parent___children',
  BooksParentChildrenId = 'books___parent___children___id',
  BooksParentChildrenChildren = 'books___parent___children___children',
  BooksParentInternalContent = 'books___parent___internal___content',
  BooksParentInternalContentDigest = 'books___parent___internal___contentDigest',
  BooksParentInternalDescription = 'books___parent___internal___description',
  BooksParentInternalFieldOwners = 'books___parent___internal___fieldOwners',
  BooksParentInternalIgnoreType = 'books___parent___internal___ignoreType',
  BooksParentInternalMediaType = 'books___parent___internal___mediaType',
  BooksParentInternalOwner = 'books___parent___internal___owner',
  BooksParentInternalType = 'books___parent___internal___type',
  BooksChildren = 'books___children',
  BooksChildrenId = 'books___children___id',
  BooksChildrenParentId = 'books___children___parent___id',
  BooksChildrenParentChildren = 'books___children___parent___children',
  BooksChildrenChildren = 'books___children___children',
  BooksChildrenChildrenId = 'books___children___children___id',
  BooksChildrenChildrenChildren = 'books___children___children___children',
  BooksChildrenInternalContent = 'books___children___internal___content',
  BooksChildrenInternalContentDigest = 'books___children___internal___contentDigest',
  BooksChildrenInternalDescription = 'books___children___internal___description',
  BooksChildrenInternalFieldOwners = 'books___children___internal___fieldOwners',
  BooksChildrenInternalIgnoreType = 'books___children___internal___ignoreType',
  BooksChildrenInternalMediaType = 'books___children___internal___mediaType',
  BooksChildrenInternalOwner = 'books___children___internal___owner',
  BooksChildrenInternalType = 'books___children___internal___type',
  BooksInternalContent = 'books___internal___content',
  BooksInternalContentDigest = 'books___internal___contentDigest',
  BooksInternalDescription = 'books___internal___description',
  BooksInternalFieldOwners = 'books___internal___fieldOwners',
  BooksInternalIgnoreType = 'books___internal___ignoreType',
  BooksInternalMediaType = 'books___internal___mediaType',
  BooksInternalOwner = 'books___internal___owner',
  BooksInternalType = 'books___internal___type',
  BooksIsbn = 'books___isbn',
  BooksIsbn13 = 'books___isbn13',
  BooksTextReviewsCount = 'books___text_reviews_count',
  BooksUri = 'books___uri',
  BooksTitle = 'books___title',
  BooksTitleWithoutSeries = 'books___title_without_series',
  BooksImageUrl = 'books___image_url',
  BooksSmallImageUrl = 'books___small_image_url',
  BooksLargeImageUrl = 'books___large_image_url',
  BooksLink = 'books___link',
  BooksNumPages = 'books___num_pages',
  BooksFormat = 'books___format',
  BooksEditionInformation = 'books___edition_information',
  BooksPublisher = 'books___publisher',
  BooksPublicationDay = 'books___publication_day',
  BooksPublicationYear = 'books___publication_year',
  BooksPublicationMonth = 'books___publication_month',
  BooksAverageRating = 'books___average_rating',
  BooksRatingsCount = 'books___ratings_count',
  BooksDescription = 'books___description',
  BooksPublished = 'books___published',
  BooksWorkId = 'books___work___id',
  BooksWorkUri = 'books___work___uri',
  BooksGoodreadsId = 'books___goodreadsId',
  BooksReviews = 'books___reviews',
  BooksReviewsId = 'books___reviews___id',
  BooksReviewsParentId = 'books___reviews___parent___id',
  BooksReviewsParentChildren = 'books___reviews___parent___children',
  BooksReviewsChildren = 'books___reviews___children',
  BooksReviewsChildrenId = 'books___reviews___children___id',
  BooksReviewsChildrenChildren = 'books___reviews___children___children',
  BooksReviewsInternalContent = 'books___reviews___internal___content',
  BooksReviewsInternalContentDigest = 'books___reviews___internal___contentDigest',
  BooksReviewsInternalDescription = 'books___reviews___internal___description',
  BooksReviewsInternalFieldOwners = 'books___reviews___internal___fieldOwners',
  BooksReviewsInternalIgnoreType = 'books___reviews___internal___ignoreType',
  BooksReviewsInternalMediaType = 'books___reviews___internal___mediaType',
  BooksReviewsInternalOwner = 'books___reviews___internal___owner',
  BooksReviewsInternalType = 'books___reviews___internal___type',
  BooksReviewsRating = 'books___reviews___rating',
  BooksReviewsVotes = 'books___reviews___votes',
  BooksReviewsSpoilerFlag = 'books___reviews___spoiler_flag',
  BooksReviewsSpoilersState = 'books___reviews___spoilers_state',
  BooksReviewsRecommendedFor = 'books___reviews___recommended_for',
  BooksReviewsRecommendedBy = 'books___reviews___recommended_by',
  BooksReviewsStartedAt = 'books___reviews___started_at',
  BooksReviewsReadAt = 'books___reviews___read_at',
  BooksReviewsDateAdded = 'books___reviews___date_added',
  BooksReviewsDateUpdated = 'books___reviews___date_updated',
  BooksReviewsReadCount = 'books___reviews___read_count',
  BooksReviewsBody = 'books___reviews___body',
  BooksReviewsCommentsCount = 'books___reviews___comments_count',
  BooksReviewsUrl = 'books___reviews___url',
  BooksReviewsLink = 'books___reviews___link',
  BooksReviewsOwned = 'books___reviews___owned',
  BooksReviewsGoodreadsId = 'books___reviews___goodreadsId',
  BooksReviewsBookId = 'books___reviews___book___id',
  BooksReviewsBookChildren = 'books___reviews___book___children',
  BooksReviewsBookIsbn = 'books___reviews___book___isbn',
  BooksReviewsBookIsbn13 = 'books___reviews___book___isbn13',
  BooksReviewsBookTextReviewsCount = 'books___reviews___book___text_reviews_count',
  BooksReviewsBookUri = 'books___reviews___book___uri',
  BooksReviewsBookTitle = 'books___reviews___book___title',
  BooksReviewsBookTitleWithoutSeries = 'books___reviews___book___title_without_series',
  BooksReviewsBookImageUrl = 'books___reviews___book___image_url',
  BooksReviewsBookSmallImageUrl = 'books___reviews___book___small_image_url',
  BooksReviewsBookLargeImageUrl = 'books___reviews___book___large_image_url',
  BooksReviewsBookLink = 'books___reviews___book___link',
  BooksReviewsBookNumPages = 'books___reviews___book___num_pages',
  BooksReviewsBookFormat = 'books___reviews___book___format',
  BooksReviewsBookEditionInformation = 'books___reviews___book___edition_information',
  BooksReviewsBookPublisher = 'books___reviews___book___publisher',
  BooksReviewsBookPublicationDay = 'books___reviews___book___publication_day',
  BooksReviewsBookPublicationYear = 'books___reviews___book___publication_year',
  BooksReviewsBookPublicationMonth = 'books___reviews___book___publication_month',
  BooksReviewsBookAverageRating = 'books___reviews___book___average_rating',
  BooksReviewsBookRatingsCount = 'books___reviews___book___ratings_count',
  BooksReviewsBookDescription = 'books___reviews___book___description',
  BooksReviewsBookPublished = 'books___reviews___book___published',
  BooksReviewsBookGoodreadsId = 'books___reviews___book___goodreadsId',
  BooksReviewsBookReviews = 'books___reviews___book___reviews',
  BooksReviewsBookAuthors = 'books___reviews___book___authors',
  BooksAuthors = 'books___authors',
  BooksAuthorsId = 'books___authors___id',
  BooksAuthorsParentId = 'books___authors___parent___id',
  BooksAuthorsParentChildren = 'books___authors___parent___children',
  BooksAuthorsChildren = 'books___authors___children',
  BooksAuthorsChildrenId = 'books___authors___children___id',
  BooksAuthorsChildrenChildren = 'books___authors___children___children',
  BooksAuthorsInternalContent = 'books___authors___internal___content',
  BooksAuthorsInternalContentDigest = 'books___authors___internal___contentDigest',
  BooksAuthorsInternalDescription = 'books___authors___internal___description',
  BooksAuthorsInternalFieldOwners = 'books___authors___internal___fieldOwners',
  BooksAuthorsInternalIgnoreType = 'books___authors___internal___ignoreType',
  BooksAuthorsInternalMediaType = 'books___authors___internal___mediaType',
  BooksAuthorsInternalOwner = 'books___authors___internal___owner',
  BooksAuthorsInternalType = 'books___authors___internal___type',
  BooksAuthorsName = 'books___authors___name',
  BooksAuthorsRole = 'books___authors___role',
  BooksAuthorsImageUrl = 'books___authors___image_url',
  BooksAuthorsSmallImageUrl = 'books___authors___small_image_url',
  BooksAuthorsLink = 'books___authors___link',
  BooksAuthorsAverageRating = 'books___authors___average_rating',
  BooksAuthorsRatingsCount = 'books___authors___ratings_count',
  BooksAuthorsTextReviewsCount = 'books___authors___text_reviews_count',
  BooksAuthorsGoodreadsId = 'books___authors___goodreadsId',
  BooksAuthorsBooks = 'books___authors___books',
  BooksAuthorsBooksId = 'books___authors___books___id',
  BooksAuthorsBooksChildren = 'books___authors___books___children',
  BooksAuthorsBooksIsbn = 'books___authors___books___isbn',
  BooksAuthorsBooksIsbn13 = 'books___authors___books___isbn13',
  BooksAuthorsBooksTextReviewsCount = 'books___authors___books___text_reviews_count',
  BooksAuthorsBooksUri = 'books___authors___books___uri',
  BooksAuthorsBooksTitle = 'books___authors___books___title',
  BooksAuthorsBooksTitleWithoutSeries = 'books___authors___books___title_without_series',
  BooksAuthorsBooksImageUrl = 'books___authors___books___image_url',
  BooksAuthorsBooksSmallImageUrl = 'books___authors___books___small_image_url',
  BooksAuthorsBooksLargeImageUrl = 'books___authors___books___large_image_url',
  BooksAuthorsBooksLink = 'books___authors___books___link',
  BooksAuthorsBooksNumPages = 'books___authors___books___num_pages',
  BooksAuthorsBooksFormat = 'books___authors___books___format',
  BooksAuthorsBooksEditionInformation = 'books___authors___books___edition_information',
  BooksAuthorsBooksPublisher = 'books___authors___books___publisher',
  BooksAuthorsBooksPublicationDay = 'books___authors___books___publication_day',
  BooksAuthorsBooksPublicationYear = 'books___authors___books___publication_year',
  BooksAuthorsBooksPublicationMonth = 'books___authors___books___publication_month',
  BooksAuthorsBooksAverageRating = 'books___authors___books___average_rating',
  BooksAuthorsBooksRatingsCount = 'books___authors___books___ratings_count',
  BooksAuthorsBooksDescription = 'books___authors___books___description',
  BooksAuthorsBooksPublished = 'books___authors___books___published',
  BooksAuthorsBooksGoodreadsId = 'books___authors___books___goodreadsId',
  BooksAuthorsBooksReviews = 'books___authors___books___reviews',
  BooksAuthorsBooksAuthors = 'books___authors___books___authors'
}

export type GoodreadsAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  role?: Maybe<StringQueryOperatorInput>,
  image_url?: Maybe<StringQueryOperatorInput>,
  small_image_url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  average_rating?: Maybe<StringQueryOperatorInput>,
  ratings_count?: Maybe<StringQueryOperatorInput>,
  text_reviews_count?: Maybe<StringQueryOperatorInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  books?: Maybe<GoodreadsBookFilterListInput>,
};

export type GoodreadsAuthorFilterListInput = {
  elemMatch?: Maybe<GoodreadsAuthorFilterInput>,
};

export type GoodreadsAuthorGroupConnection = {
   __typename?: 'GoodreadsAuthorGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsAuthorEdge>,
  nodes: Array<GoodreadsAuthor>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GoodreadsAuthorSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsAuthorFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type GoodreadsBook = Node & {
   __typename?: 'GoodreadsBook',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  isbn?: Maybe<Scalars['String']>,
  isbn13?: Maybe<Scalars['String']>,
  text_reviews_count?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  title_without_series?: Maybe<Scalars['String']>,
  image_url?: Maybe<Scalars['String']>,
  small_image_url?: Maybe<Scalars['String']>,
  large_image_url?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  num_pages?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  edition_information?: Maybe<Scalars['String']>,
  publisher?: Maybe<Scalars['String']>,
  publication_day?: Maybe<Scalars['String']>,
  publication_year?: Maybe<Scalars['Date']>,
  publication_month?: Maybe<Scalars['String']>,
  average_rating?: Maybe<Scalars['String']>,
  ratings_count?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  published?: Maybe<Scalars['Date']>,
  work?: Maybe<GoodreadsBookWork>,
  goodreadsId?: Maybe<Scalars['String']>,
  reviews?: Maybe<Array<Maybe<GoodreadsReview>>>,
  authors?: Maybe<Array<Maybe<GoodreadsAuthor>>>,
};


export type GoodreadsBookPublication_YearArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type GoodreadsBookPublishedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type GoodreadsBookConnection = {
   __typename?: 'GoodreadsBookConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsBookEdge>,
  nodes: Array<GoodreadsBook>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GoodreadsBookGroupConnection>,
};


export type GoodreadsBookConnectionDistinctArgs = {
  field: GoodreadsBookFieldsEnum
};


export type GoodreadsBookConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GoodreadsBookFieldsEnum
};

export type GoodreadsBookEdge = {
   __typename?: 'GoodreadsBookEdge',
  next?: Maybe<GoodreadsBook>,
  node: GoodreadsBook,
  previous?: Maybe<GoodreadsBook>,
};

export enum GoodreadsBookFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Isbn = 'isbn',
  Isbn13 = 'isbn13',
  TextReviewsCount = 'text_reviews_count',
  Uri = 'uri',
  Title = 'title',
  TitleWithoutSeries = 'title_without_series',
  ImageUrl = 'image_url',
  SmallImageUrl = 'small_image_url',
  LargeImageUrl = 'large_image_url',
  Link = 'link',
  NumPages = 'num_pages',
  Format = 'format',
  EditionInformation = 'edition_information',
  Publisher = 'publisher',
  PublicationDay = 'publication_day',
  PublicationYear = 'publication_year',
  PublicationMonth = 'publication_month',
  AverageRating = 'average_rating',
  RatingsCount = 'ratings_count',
  Description = 'description',
  Published = 'published',
  WorkId = 'work___id',
  WorkUri = 'work___uri',
  GoodreadsId = 'goodreadsId',
  Reviews = 'reviews',
  ReviewsId = 'reviews___id',
  ReviewsParentId = 'reviews___parent___id',
  ReviewsParentParentId = 'reviews___parent___parent___id',
  ReviewsParentParentChildren = 'reviews___parent___parent___children',
  ReviewsParentChildren = 'reviews___parent___children',
  ReviewsParentChildrenId = 'reviews___parent___children___id',
  ReviewsParentChildrenChildren = 'reviews___parent___children___children',
  ReviewsParentInternalContent = 'reviews___parent___internal___content',
  ReviewsParentInternalContentDigest = 'reviews___parent___internal___contentDigest',
  ReviewsParentInternalDescription = 'reviews___parent___internal___description',
  ReviewsParentInternalFieldOwners = 'reviews___parent___internal___fieldOwners',
  ReviewsParentInternalIgnoreType = 'reviews___parent___internal___ignoreType',
  ReviewsParentInternalMediaType = 'reviews___parent___internal___mediaType',
  ReviewsParentInternalOwner = 'reviews___parent___internal___owner',
  ReviewsParentInternalType = 'reviews___parent___internal___type',
  ReviewsChildren = 'reviews___children',
  ReviewsChildrenId = 'reviews___children___id',
  ReviewsChildrenParentId = 'reviews___children___parent___id',
  ReviewsChildrenParentChildren = 'reviews___children___parent___children',
  ReviewsChildrenChildren = 'reviews___children___children',
  ReviewsChildrenChildrenId = 'reviews___children___children___id',
  ReviewsChildrenChildrenChildren = 'reviews___children___children___children',
  ReviewsChildrenInternalContent = 'reviews___children___internal___content',
  ReviewsChildrenInternalContentDigest = 'reviews___children___internal___contentDigest',
  ReviewsChildrenInternalDescription = 'reviews___children___internal___description',
  ReviewsChildrenInternalFieldOwners = 'reviews___children___internal___fieldOwners',
  ReviewsChildrenInternalIgnoreType = 'reviews___children___internal___ignoreType',
  ReviewsChildrenInternalMediaType = 'reviews___children___internal___mediaType',
  ReviewsChildrenInternalOwner = 'reviews___children___internal___owner',
  ReviewsChildrenInternalType = 'reviews___children___internal___type',
  ReviewsInternalContent = 'reviews___internal___content',
  ReviewsInternalContentDigest = 'reviews___internal___contentDigest',
  ReviewsInternalDescription = 'reviews___internal___description',
  ReviewsInternalFieldOwners = 'reviews___internal___fieldOwners',
  ReviewsInternalIgnoreType = 'reviews___internal___ignoreType',
  ReviewsInternalMediaType = 'reviews___internal___mediaType',
  ReviewsInternalOwner = 'reviews___internal___owner',
  ReviewsInternalType = 'reviews___internal___type',
  ReviewsRating = 'reviews___rating',
  ReviewsVotes = 'reviews___votes',
  ReviewsSpoilerFlag = 'reviews___spoiler_flag',
  ReviewsSpoilersState = 'reviews___spoilers_state',
  ReviewsRecommendedFor = 'reviews___recommended_for',
  ReviewsRecommendedBy = 'reviews___recommended_by',
  ReviewsStartedAt = 'reviews___started_at',
  ReviewsReadAt = 'reviews___read_at',
  ReviewsDateAdded = 'reviews___date_added',
  ReviewsDateUpdated = 'reviews___date_updated',
  ReviewsReadCount = 'reviews___read_count',
  ReviewsBody = 'reviews___body',
  ReviewsCommentsCount = 'reviews___comments_count',
  ReviewsUrl = 'reviews___url',
  ReviewsLink = 'reviews___link',
  ReviewsOwned = 'reviews___owned',
  ReviewsGoodreadsId = 'reviews___goodreadsId',
  ReviewsBookId = 'reviews___book___id',
  ReviewsBookParentId = 'reviews___book___parent___id',
  ReviewsBookParentChildren = 'reviews___book___parent___children',
  ReviewsBookChildren = 'reviews___book___children',
  ReviewsBookChildrenId = 'reviews___book___children___id',
  ReviewsBookChildrenChildren = 'reviews___book___children___children',
  ReviewsBookInternalContent = 'reviews___book___internal___content',
  ReviewsBookInternalContentDigest = 'reviews___book___internal___contentDigest',
  ReviewsBookInternalDescription = 'reviews___book___internal___description',
  ReviewsBookInternalFieldOwners = 'reviews___book___internal___fieldOwners',
  ReviewsBookInternalIgnoreType = 'reviews___book___internal___ignoreType',
  ReviewsBookInternalMediaType = 'reviews___book___internal___mediaType',
  ReviewsBookInternalOwner = 'reviews___book___internal___owner',
  ReviewsBookInternalType = 'reviews___book___internal___type',
  ReviewsBookIsbn = 'reviews___book___isbn',
  ReviewsBookIsbn13 = 'reviews___book___isbn13',
  ReviewsBookTextReviewsCount = 'reviews___book___text_reviews_count',
  ReviewsBookUri = 'reviews___book___uri',
  ReviewsBookTitle = 'reviews___book___title',
  ReviewsBookTitleWithoutSeries = 'reviews___book___title_without_series',
  ReviewsBookImageUrl = 'reviews___book___image_url',
  ReviewsBookSmallImageUrl = 'reviews___book___small_image_url',
  ReviewsBookLargeImageUrl = 'reviews___book___large_image_url',
  ReviewsBookLink = 'reviews___book___link',
  ReviewsBookNumPages = 'reviews___book___num_pages',
  ReviewsBookFormat = 'reviews___book___format',
  ReviewsBookEditionInformation = 'reviews___book___edition_information',
  ReviewsBookPublisher = 'reviews___book___publisher',
  ReviewsBookPublicationDay = 'reviews___book___publication_day',
  ReviewsBookPublicationYear = 'reviews___book___publication_year',
  ReviewsBookPublicationMonth = 'reviews___book___publication_month',
  ReviewsBookAverageRating = 'reviews___book___average_rating',
  ReviewsBookRatingsCount = 'reviews___book___ratings_count',
  ReviewsBookDescription = 'reviews___book___description',
  ReviewsBookPublished = 'reviews___book___published',
  ReviewsBookWorkId = 'reviews___book___work___id',
  ReviewsBookWorkUri = 'reviews___book___work___uri',
  ReviewsBookGoodreadsId = 'reviews___book___goodreadsId',
  ReviewsBookReviews = 'reviews___book___reviews',
  ReviewsBookReviewsId = 'reviews___book___reviews___id',
  ReviewsBookReviewsChildren = 'reviews___book___reviews___children',
  ReviewsBookReviewsRating = 'reviews___book___reviews___rating',
  ReviewsBookReviewsVotes = 'reviews___book___reviews___votes',
  ReviewsBookReviewsSpoilerFlag = 'reviews___book___reviews___spoiler_flag',
  ReviewsBookReviewsSpoilersState = 'reviews___book___reviews___spoilers_state',
  ReviewsBookReviewsRecommendedFor = 'reviews___book___reviews___recommended_for',
  ReviewsBookReviewsRecommendedBy = 'reviews___book___reviews___recommended_by',
  ReviewsBookReviewsStartedAt = 'reviews___book___reviews___started_at',
  ReviewsBookReviewsReadAt = 'reviews___book___reviews___read_at',
  ReviewsBookReviewsDateAdded = 'reviews___book___reviews___date_added',
  ReviewsBookReviewsDateUpdated = 'reviews___book___reviews___date_updated',
  ReviewsBookReviewsReadCount = 'reviews___book___reviews___read_count',
  ReviewsBookReviewsBody = 'reviews___book___reviews___body',
  ReviewsBookReviewsCommentsCount = 'reviews___book___reviews___comments_count',
  ReviewsBookReviewsUrl = 'reviews___book___reviews___url',
  ReviewsBookReviewsLink = 'reviews___book___reviews___link',
  ReviewsBookReviewsOwned = 'reviews___book___reviews___owned',
  ReviewsBookReviewsGoodreadsId = 'reviews___book___reviews___goodreadsId',
  ReviewsBookAuthors = 'reviews___book___authors',
  ReviewsBookAuthorsId = 'reviews___book___authors___id',
  ReviewsBookAuthorsChildren = 'reviews___book___authors___children',
  ReviewsBookAuthorsName = 'reviews___book___authors___name',
  ReviewsBookAuthorsRole = 'reviews___book___authors___role',
  ReviewsBookAuthorsImageUrl = 'reviews___book___authors___image_url',
  ReviewsBookAuthorsSmallImageUrl = 'reviews___book___authors___small_image_url',
  ReviewsBookAuthorsLink = 'reviews___book___authors___link',
  ReviewsBookAuthorsAverageRating = 'reviews___book___authors___average_rating',
  ReviewsBookAuthorsRatingsCount = 'reviews___book___authors___ratings_count',
  ReviewsBookAuthorsTextReviewsCount = 'reviews___book___authors___text_reviews_count',
  ReviewsBookAuthorsGoodreadsId = 'reviews___book___authors___goodreadsId',
  ReviewsBookAuthorsBooks = 'reviews___book___authors___books',
  Authors = 'authors',
  AuthorsId = 'authors___id',
  AuthorsParentId = 'authors___parent___id',
  AuthorsParentParentId = 'authors___parent___parent___id',
  AuthorsParentParentChildren = 'authors___parent___parent___children',
  AuthorsParentChildren = 'authors___parent___children',
  AuthorsParentChildrenId = 'authors___parent___children___id',
  AuthorsParentChildrenChildren = 'authors___parent___children___children',
  AuthorsParentInternalContent = 'authors___parent___internal___content',
  AuthorsParentInternalContentDigest = 'authors___parent___internal___contentDigest',
  AuthorsParentInternalDescription = 'authors___parent___internal___description',
  AuthorsParentInternalFieldOwners = 'authors___parent___internal___fieldOwners',
  AuthorsParentInternalIgnoreType = 'authors___parent___internal___ignoreType',
  AuthorsParentInternalMediaType = 'authors___parent___internal___mediaType',
  AuthorsParentInternalOwner = 'authors___parent___internal___owner',
  AuthorsParentInternalType = 'authors___parent___internal___type',
  AuthorsChildren = 'authors___children',
  AuthorsChildrenId = 'authors___children___id',
  AuthorsChildrenParentId = 'authors___children___parent___id',
  AuthorsChildrenParentChildren = 'authors___children___parent___children',
  AuthorsChildrenChildren = 'authors___children___children',
  AuthorsChildrenChildrenId = 'authors___children___children___id',
  AuthorsChildrenChildrenChildren = 'authors___children___children___children',
  AuthorsChildrenInternalContent = 'authors___children___internal___content',
  AuthorsChildrenInternalContentDigest = 'authors___children___internal___contentDigest',
  AuthorsChildrenInternalDescription = 'authors___children___internal___description',
  AuthorsChildrenInternalFieldOwners = 'authors___children___internal___fieldOwners',
  AuthorsChildrenInternalIgnoreType = 'authors___children___internal___ignoreType',
  AuthorsChildrenInternalMediaType = 'authors___children___internal___mediaType',
  AuthorsChildrenInternalOwner = 'authors___children___internal___owner',
  AuthorsChildrenInternalType = 'authors___children___internal___type',
  AuthorsInternalContent = 'authors___internal___content',
  AuthorsInternalContentDigest = 'authors___internal___contentDigest',
  AuthorsInternalDescription = 'authors___internal___description',
  AuthorsInternalFieldOwners = 'authors___internal___fieldOwners',
  AuthorsInternalIgnoreType = 'authors___internal___ignoreType',
  AuthorsInternalMediaType = 'authors___internal___mediaType',
  AuthorsInternalOwner = 'authors___internal___owner',
  AuthorsInternalType = 'authors___internal___type',
  AuthorsName = 'authors___name',
  AuthorsRole = 'authors___role',
  AuthorsImageUrl = 'authors___image_url',
  AuthorsSmallImageUrl = 'authors___small_image_url',
  AuthorsLink = 'authors___link',
  AuthorsAverageRating = 'authors___average_rating',
  AuthorsRatingsCount = 'authors___ratings_count',
  AuthorsTextReviewsCount = 'authors___text_reviews_count',
  AuthorsGoodreadsId = 'authors___goodreadsId',
  AuthorsBooks = 'authors___books',
  AuthorsBooksId = 'authors___books___id',
  AuthorsBooksParentId = 'authors___books___parent___id',
  AuthorsBooksParentChildren = 'authors___books___parent___children',
  AuthorsBooksChildren = 'authors___books___children',
  AuthorsBooksChildrenId = 'authors___books___children___id',
  AuthorsBooksChildrenChildren = 'authors___books___children___children',
  AuthorsBooksInternalContent = 'authors___books___internal___content',
  AuthorsBooksInternalContentDigest = 'authors___books___internal___contentDigest',
  AuthorsBooksInternalDescription = 'authors___books___internal___description',
  AuthorsBooksInternalFieldOwners = 'authors___books___internal___fieldOwners',
  AuthorsBooksInternalIgnoreType = 'authors___books___internal___ignoreType',
  AuthorsBooksInternalMediaType = 'authors___books___internal___mediaType',
  AuthorsBooksInternalOwner = 'authors___books___internal___owner',
  AuthorsBooksInternalType = 'authors___books___internal___type',
  AuthorsBooksIsbn = 'authors___books___isbn',
  AuthorsBooksIsbn13 = 'authors___books___isbn13',
  AuthorsBooksTextReviewsCount = 'authors___books___text_reviews_count',
  AuthorsBooksUri = 'authors___books___uri',
  AuthorsBooksTitle = 'authors___books___title',
  AuthorsBooksTitleWithoutSeries = 'authors___books___title_without_series',
  AuthorsBooksImageUrl = 'authors___books___image_url',
  AuthorsBooksSmallImageUrl = 'authors___books___small_image_url',
  AuthorsBooksLargeImageUrl = 'authors___books___large_image_url',
  AuthorsBooksLink = 'authors___books___link',
  AuthorsBooksNumPages = 'authors___books___num_pages',
  AuthorsBooksFormat = 'authors___books___format',
  AuthorsBooksEditionInformation = 'authors___books___edition_information',
  AuthorsBooksPublisher = 'authors___books___publisher',
  AuthorsBooksPublicationDay = 'authors___books___publication_day',
  AuthorsBooksPublicationYear = 'authors___books___publication_year',
  AuthorsBooksPublicationMonth = 'authors___books___publication_month',
  AuthorsBooksAverageRating = 'authors___books___average_rating',
  AuthorsBooksRatingsCount = 'authors___books___ratings_count',
  AuthorsBooksDescription = 'authors___books___description',
  AuthorsBooksPublished = 'authors___books___published',
  AuthorsBooksWorkId = 'authors___books___work___id',
  AuthorsBooksWorkUri = 'authors___books___work___uri',
  AuthorsBooksGoodreadsId = 'authors___books___goodreadsId',
  AuthorsBooksReviews = 'authors___books___reviews',
  AuthorsBooksReviewsId = 'authors___books___reviews___id',
  AuthorsBooksReviewsChildren = 'authors___books___reviews___children',
  AuthorsBooksReviewsRating = 'authors___books___reviews___rating',
  AuthorsBooksReviewsVotes = 'authors___books___reviews___votes',
  AuthorsBooksReviewsSpoilerFlag = 'authors___books___reviews___spoiler_flag',
  AuthorsBooksReviewsSpoilersState = 'authors___books___reviews___spoilers_state',
  AuthorsBooksReviewsRecommendedFor = 'authors___books___reviews___recommended_for',
  AuthorsBooksReviewsRecommendedBy = 'authors___books___reviews___recommended_by',
  AuthorsBooksReviewsStartedAt = 'authors___books___reviews___started_at',
  AuthorsBooksReviewsReadAt = 'authors___books___reviews___read_at',
  AuthorsBooksReviewsDateAdded = 'authors___books___reviews___date_added',
  AuthorsBooksReviewsDateUpdated = 'authors___books___reviews___date_updated',
  AuthorsBooksReviewsReadCount = 'authors___books___reviews___read_count',
  AuthorsBooksReviewsBody = 'authors___books___reviews___body',
  AuthorsBooksReviewsCommentsCount = 'authors___books___reviews___comments_count',
  AuthorsBooksReviewsUrl = 'authors___books___reviews___url',
  AuthorsBooksReviewsLink = 'authors___books___reviews___link',
  AuthorsBooksReviewsOwned = 'authors___books___reviews___owned',
  AuthorsBooksReviewsGoodreadsId = 'authors___books___reviews___goodreadsId',
  AuthorsBooksAuthors = 'authors___books___authors',
  AuthorsBooksAuthorsId = 'authors___books___authors___id',
  AuthorsBooksAuthorsChildren = 'authors___books___authors___children',
  AuthorsBooksAuthorsName = 'authors___books___authors___name',
  AuthorsBooksAuthorsRole = 'authors___books___authors___role',
  AuthorsBooksAuthorsImageUrl = 'authors___books___authors___image_url',
  AuthorsBooksAuthorsSmallImageUrl = 'authors___books___authors___small_image_url',
  AuthorsBooksAuthorsLink = 'authors___books___authors___link',
  AuthorsBooksAuthorsAverageRating = 'authors___books___authors___average_rating',
  AuthorsBooksAuthorsRatingsCount = 'authors___books___authors___ratings_count',
  AuthorsBooksAuthorsTextReviewsCount = 'authors___books___authors___text_reviews_count',
  AuthorsBooksAuthorsGoodreadsId = 'authors___books___authors___goodreadsId',
  AuthorsBooksAuthorsBooks = 'authors___books___authors___books'
}

export type GoodreadsBookFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isbn?: Maybe<StringQueryOperatorInput>,
  isbn13?: Maybe<StringQueryOperatorInput>,
  text_reviews_count?: Maybe<StringQueryOperatorInput>,
  uri?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  title_without_series?: Maybe<StringQueryOperatorInput>,
  image_url?: Maybe<StringQueryOperatorInput>,
  small_image_url?: Maybe<StringQueryOperatorInput>,
  large_image_url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  num_pages?: Maybe<StringQueryOperatorInput>,
  format?: Maybe<StringQueryOperatorInput>,
  edition_information?: Maybe<StringQueryOperatorInput>,
  publisher?: Maybe<StringQueryOperatorInput>,
  publication_day?: Maybe<StringQueryOperatorInput>,
  publication_year?: Maybe<DateQueryOperatorInput>,
  publication_month?: Maybe<StringQueryOperatorInput>,
  average_rating?: Maybe<StringQueryOperatorInput>,
  ratings_count?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  published?: Maybe<DateQueryOperatorInput>,
  work?: Maybe<GoodreadsBookWorkFilterInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  reviews?: Maybe<GoodreadsReviewFilterListInput>,
  authors?: Maybe<GoodreadsAuthorFilterListInput>,
};

export type GoodreadsBookFilterListInput = {
  elemMatch?: Maybe<GoodreadsBookFilterInput>,
};

export type GoodreadsBookGroupConnection = {
   __typename?: 'GoodreadsBookGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsBookEdge>,
  nodes: Array<GoodreadsBook>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GoodreadsBookSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsBookFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type GoodreadsBookWork = {
   __typename?: 'GoodreadsBookWork',
  id?: Maybe<Scalars['String']>,
  uri?: Maybe<Scalars['String']>,
};

export type GoodreadsBookWorkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  uri?: Maybe<StringQueryOperatorInput>,
};

export type GoodreadsReview = Node & {
   __typename?: 'GoodreadsReview',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  rating?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['String']>,
  spoiler_flag?: Maybe<Scalars['String']>,
  spoilers_state?: Maybe<Scalars['String']>,
  recommended_for?: Maybe<Scalars['String']>,
  recommended_by?: Maybe<Scalars['String']>,
  started_at?: Maybe<Scalars['String']>,
  read_at?: Maybe<Scalars['String']>,
  date_added?: Maybe<Scalars['String']>,
  date_updated?: Maybe<Scalars['String']>,
  read_count?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  comments_count?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  owned?: Maybe<Scalars['String']>,
  goodreadsId?: Maybe<Scalars['String']>,
  book?: Maybe<GoodreadsBook>,
};

export type GoodreadsReviewConnection = {
   __typename?: 'GoodreadsReviewConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsReviewEdge>,
  nodes: Array<GoodreadsReview>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GoodreadsReviewGroupConnection>,
};


export type GoodreadsReviewConnectionDistinctArgs = {
  field: GoodreadsReviewFieldsEnum
};


export type GoodreadsReviewConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GoodreadsReviewFieldsEnum
};

export type GoodreadsReviewEdge = {
   __typename?: 'GoodreadsReviewEdge',
  next?: Maybe<GoodreadsReview>,
  node: GoodreadsReview,
  previous?: Maybe<GoodreadsReview>,
};

export enum GoodreadsReviewFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Rating = 'rating',
  Votes = 'votes',
  SpoilerFlag = 'spoiler_flag',
  SpoilersState = 'spoilers_state',
  RecommendedFor = 'recommended_for',
  RecommendedBy = 'recommended_by',
  StartedAt = 'started_at',
  ReadAt = 'read_at',
  DateAdded = 'date_added',
  DateUpdated = 'date_updated',
  ReadCount = 'read_count',
  Body = 'body',
  CommentsCount = 'comments_count',
  Url = 'url',
  Link = 'link',
  Owned = 'owned',
  GoodreadsId = 'goodreadsId',
  BookId = 'book___id',
  BookParentId = 'book___parent___id',
  BookParentParentId = 'book___parent___parent___id',
  BookParentParentChildren = 'book___parent___parent___children',
  BookParentChildren = 'book___parent___children',
  BookParentChildrenId = 'book___parent___children___id',
  BookParentChildrenChildren = 'book___parent___children___children',
  BookParentInternalContent = 'book___parent___internal___content',
  BookParentInternalContentDigest = 'book___parent___internal___contentDigest',
  BookParentInternalDescription = 'book___parent___internal___description',
  BookParentInternalFieldOwners = 'book___parent___internal___fieldOwners',
  BookParentInternalIgnoreType = 'book___parent___internal___ignoreType',
  BookParentInternalMediaType = 'book___parent___internal___mediaType',
  BookParentInternalOwner = 'book___parent___internal___owner',
  BookParentInternalType = 'book___parent___internal___type',
  BookChildren = 'book___children',
  BookChildrenId = 'book___children___id',
  BookChildrenParentId = 'book___children___parent___id',
  BookChildrenParentChildren = 'book___children___parent___children',
  BookChildrenChildren = 'book___children___children',
  BookChildrenChildrenId = 'book___children___children___id',
  BookChildrenChildrenChildren = 'book___children___children___children',
  BookChildrenInternalContent = 'book___children___internal___content',
  BookChildrenInternalContentDigest = 'book___children___internal___contentDigest',
  BookChildrenInternalDescription = 'book___children___internal___description',
  BookChildrenInternalFieldOwners = 'book___children___internal___fieldOwners',
  BookChildrenInternalIgnoreType = 'book___children___internal___ignoreType',
  BookChildrenInternalMediaType = 'book___children___internal___mediaType',
  BookChildrenInternalOwner = 'book___children___internal___owner',
  BookChildrenInternalType = 'book___children___internal___type',
  BookInternalContent = 'book___internal___content',
  BookInternalContentDigest = 'book___internal___contentDigest',
  BookInternalDescription = 'book___internal___description',
  BookInternalFieldOwners = 'book___internal___fieldOwners',
  BookInternalIgnoreType = 'book___internal___ignoreType',
  BookInternalMediaType = 'book___internal___mediaType',
  BookInternalOwner = 'book___internal___owner',
  BookInternalType = 'book___internal___type',
  BookIsbn = 'book___isbn',
  BookIsbn13 = 'book___isbn13',
  BookTextReviewsCount = 'book___text_reviews_count',
  BookUri = 'book___uri',
  BookTitle = 'book___title',
  BookTitleWithoutSeries = 'book___title_without_series',
  BookImageUrl = 'book___image_url',
  BookSmallImageUrl = 'book___small_image_url',
  BookLargeImageUrl = 'book___large_image_url',
  BookLink = 'book___link',
  BookNumPages = 'book___num_pages',
  BookFormat = 'book___format',
  BookEditionInformation = 'book___edition_information',
  BookPublisher = 'book___publisher',
  BookPublicationDay = 'book___publication_day',
  BookPublicationYear = 'book___publication_year',
  BookPublicationMonth = 'book___publication_month',
  BookAverageRating = 'book___average_rating',
  BookRatingsCount = 'book___ratings_count',
  BookDescription = 'book___description',
  BookPublished = 'book___published',
  BookWorkId = 'book___work___id',
  BookWorkUri = 'book___work___uri',
  BookGoodreadsId = 'book___goodreadsId',
  BookReviews = 'book___reviews',
  BookReviewsId = 'book___reviews___id',
  BookReviewsParentId = 'book___reviews___parent___id',
  BookReviewsParentChildren = 'book___reviews___parent___children',
  BookReviewsChildren = 'book___reviews___children',
  BookReviewsChildrenId = 'book___reviews___children___id',
  BookReviewsChildrenChildren = 'book___reviews___children___children',
  BookReviewsInternalContent = 'book___reviews___internal___content',
  BookReviewsInternalContentDigest = 'book___reviews___internal___contentDigest',
  BookReviewsInternalDescription = 'book___reviews___internal___description',
  BookReviewsInternalFieldOwners = 'book___reviews___internal___fieldOwners',
  BookReviewsInternalIgnoreType = 'book___reviews___internal___ignoreType',
  BookReviewsInternalMediaType = 'book___reviews___internal___mediaType',
  BookReviewsInternalOwner = 'book___reviews___internal___owner',
  BookReviewsInternalType = 'book___reviews___internal___type',
  BookReviewsRating = 'book___reviews___rating',
  BookReviewsVotes = 'book___reviews___votes',
  BookReviewsSpoilerFlag = 'book___reviews___spoiler_flag',
  BookReviewsSpoilersState = 'book___reviews___spoilers_state',
  BookReviewsRecommendedFor = 'book___reviews___recommended_for',
  BookReviewsRecommendedBy = 'book___reviews___recommended_by',
  BookReviewsStartedAt = 'book___reviews___started_at',
  BookReviewsReadAt = 'book___reviews___read_at',
  BookReviewsDateAdded = 'book___reviews___date_added',
  BookReviewsDateUpdated = 'book___reviews___date_updated',
  BookReviewsReadCount = 'book___reviews___read_count',
  BookReviewsBody = 'book___reviews___body',
  BookReviewsCommentsCount = 'book___reviews___comments_count',
  BookReviewsUrl = 'book___reviews___url',
  BookReviewsLink = 'book___reviews___link',
  BookReviewsOwned = 'book___reviews___owned',
  BookReviewsGoodreadsId = 'book___reviews___goodreadsId',
  BookReviewsBookId = 'book___reviews___book___id',
  BookReviewsBookChildren = 'book___reviews___book___children',
  BookReviewsBookIsbn = 'book___reviews___book___isbn',
  BookReviewsBookIsbn13 = 'book___reviews___book___isbn13',
  BookReviewsBookTextReviewsCount = 'book___reviews___book___text_reviews_count',
  BookReviewsBookUri = 'book___reviews___book___uri',
  BookReviewsBookTitle = 'book___reviews___book___title',
  BookReviewsBookTitleWithoutSeries = 'book___reviews___book___title_without_series',
  BookReviewsBookImageUrl = 'book___reviews___book___image_url',
  BookReviewsBookSmallImageUrl = 'book___reviews___book___small_image_url',
  BookReviewsBookLargeImageUrl = 'book___reviews___book___large_image_url',
  BookReviewsBookLink = 'book___reviews___book___link',
  BookReviewsBookNumPages = 'book___reviews___book___num_pages',
  BookReviewsBookFormat = 'book___reviews___book___format',
  BookReviewsBookEditionInformation = 'book___reviews___book___edition_information',
  BookReviewsBookPublisher = 'book___reviews___book___publisher',
  BookReviewsBookPublicationDay = 'book___reviews___book___publication_day',
  BookReviewsBookPublicationYear = 'book___reviews___book___publication_year',
  BookReviewsBookPublicationMonth = 'book___reviews___book___publication_month',
  BookReviewsBookAverageRating = 'book___reviews___book___average_rating',
  BookReviewsBookRatingsCount = 'book___reviews___book___ratings_count',
  BookReviewsBookDescription = 'book___reviews___book___description',
  BookReviewsBookPublished = 'book___reviews___book___published',
  BookReviewsBookGoodreadsId = 'book___reviews___book___goodreadsId',
  BookReviewsBookReviews = 'book___reviews___book___reviews',
  BookReviewsBookAuthors = 'book___reviews___book___authors',
  BookAuthors = 'book___authors',
  BookAuthorsId = 'book___authors___id',
  BookAuthorsParentId = 'book___authors___parent___id',
  BookAuthorsParentChildren = 'book___authors___parent___children',
  BookAuthorsChildren = 'book___authors___children',
  BookAuthorsChildrenId = 'book___authors___children___id',
  BookAuthorsChildrenChildren = 'book___authors___children___children',
  BookAuthorsInternalContent = 'book___authors___internal___content',
  BookAuthorsInternalContentDigest = 'book___authors___internal___contentDigest',
  BookAuthorsInternalDescription = 'book___authors___internal___description',
  BookAuthorsInternalFieldOwners = 'book___authors___internal___fieldOwners',
  BookAuthorsInternalIgnoreType = 'book___authors___internal___ignoreType',
  BookAuthorsInternalMediaType = 'book___authors___internal___mediaType',
  BookAuthorsInternalOwner = 'book___authors___internal___owner',
  BookAuthorsInternalType = 'book___authors___internal___type',
  BookAuthorsName = 'book___authors___name',
  BookAuthorsRole = 'book___authors___role',
  BookAuthorsImageUrl = 'book___authors___image_url',
  BookAuthorsSmallImageUrl = 'book___authors___small_image_url',
  BookAuthorsLink = 'book___authors___link',
  BookAuthorsAverageRating = 'book___authors___average_rating',
  BookAuthorsRatingsCount = 'book___authors___ratings_count',
  BookAuthorsTextReviewsCount = 'book___authors___text_reviews_count',
  BookAuthorsGoodreadsId = 'book___authors___goodreadsId',
  BookAuthorsBooks = 'book___authors___books',
  BookAuthorsBooksId = 'book___authors___books___id',
  BookAuthorsBooksChildren = 'book___authors___books___children',
  BookAuthorsBooksIsbn = 'book___authors___books___isbn',
  BookAuthorsBooksIsbn13 = 'book___authors___books___isbn13',
  BookAuthorsBooksTextReviewsCount = 'book___authors___books___text_reviews_count',
  BookAuthorsBooksUri = 'book___authors___books___uri',
  BookAuthorsBooksTitle = 'book___authors___books___title',
  BookAuthorsBooksTitleWithoutSeries = 'book___authors___books___title_without_series',
  BookAuthorsBooksImageUrl = 'book___authors___books___image_url',
  BookAuthorsBooksSmallImageUrl = 'book___authors___books___small_image_url',
  BookAuthorsBooksLargeImageUrl = 'book___authors___books___large_image_url',
  BookAuthorsBooksLink = 'book___authors___books___link',
  BookAuthorsBooksNumPages = 'book___authors___books___num_pages',
  BookAuthorsBooksFormat = 'book___authors___books___format',
  BookAuthorsBooksEditionInformation = 'book___authors___books___edition_information',
  BookAuthorsBooksPublisher = 'book___authors___books___publisher',
  BookAuthorsBooksPublicationDay = 'book___authors___books___publication_day',
  BookAuthorsBooksPublicationYear = 'book___authors___books___publication_year',
  BookAuthorsBooksPublicationMonth = 'book___authors___books___publication_month',
  BookAuthorsBooksAverageRating = 'book___authors___books___average_rating',
  BookAuthorsBooksRatingsCount = 'book___authors___books___ratings_count',
  BookAuthorsBooksDescription = 'book___authors___books___description',
  BookAuthorsBooksPublished = 'book___authors___books___published',
  BookAuthorsBooksGoodreadsId = 'book___authors___books___goodreadsId',
  BookAuthorsBooksReviews = 'book___authors___books___reviews',
  BookAuthorsBooksAuthors = 'book___authors___books___authors'
}

export type GoodreadsReviewFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  rating?: Maybe<StringQueryOperatorInput>,
  votes?: Maybe<StringQueryOperatorInput>,
  spoiler_flag?: Maybe<StringQueryOperatorInput>,
  spoilers_state?: Maybe<StringQueryOperatorInput>,
  recommended_for?: Maybe<StringQueryOperatorInput>,
  recommended_by?: Maybe<StringQueryOperatorInput>,
  started_at?: Maybe<StringQueryOperatorInput>,
  read_at?: Maybe<StringQueryOperatorInput>,
  date_added?: Maybe<StringQueryOperatorInput>,
  date_updated?: Maybe<StringQueryOperatorInput>,
  read_count?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  comments_count?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  owned?: Maybe<StringQueryOperatorInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  book?: Maybe<GoodreadsBookFilterInput>,
};

export type GoodreadsReviewFilterListInput = {
  elemMatch?: Maybe<GoodreadsReviewFilterInput>,
};

export type GoodreadsReviewGroupConnection = {
   __typename?: 'GoodreadsReviewGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsReviewEdge>,
  nodes: Array<GoodreadsReview>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GoodreadsReviewSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsReviewFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type GoodreadsShelf = Node & {
   __typename?: 'GoodreadsShelf',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  exclusive?: Maybe<Scalars['String']>,
  review_shelf_id?: Maybe<Scalars['String']>,
  goodreadsId?: Maybe<Scalars['String']>,
  reviews?: Maybe<Array<Maybe<GoodreadsReview>>>,
  sortable?: Maybe<Scalars['String']>,
};

export type GoodreadsShelfConnection = {
   __typename?: 'GoodreadsShelfConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsShelfEdge>,
  nodes: Array<GoodreadsShelf>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GoodreadsShelfGroupConnection>,
};


export type GoodreadsShelfConnectionDistinctArgs = {
  field: GoodreadsShelfFieldsEnum
};


export type GoodreadsShelfConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GoodreadsShelfFieldsEnum
};

export type GoodreadsShelfEdge = {
   __typename?: 'GoodreadsShelfEdge',
  next?: Maybe<GoodreadsShelf>,
  node: GoodreadsShelf,
  previous?: Maybe<GoodreadsShelf>,
};

export enum GoodreadsShelfFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Exclusive = 'exclusive',
  ReviewShelfId = 'review_shelf_id',
  GoodreadsId = 'goodreadsId',
  Reviews = 'reviews',
  ReviewsId = 'reviews___id',
  ReviewsParentId = 'reviews___parent___id',
  ReviewsParentParentId = 'reviews___parent___parent___id',
  ReviewsParentParentChildren = 'reviews___parent___parent___children',
  ReviewsParentChildren = 'reviews___parent___children',
  ReviewsParentChildrenId = 'reviews___parent___children___id',
  ReviewsParentChildrenChildren = 'reviews___parent___children___children',
  ReviewsParentInternalContent = 'reviews___parent___internal___content',
  ReviewsParentInternalContentDigest = 'reviews___parent___internal___contentDigest',
  ReviewsParentInternalDescription = 'reviews___parent___internal___description',
  ReviewsParentInternalFieldOwners = 'reviews___parent___internal___fieldOwners',
  ReviewsParentInternalIgnoreType = 'reviews___parent___internal___ignoreType',
  ReviewsParentInternalMediaType = 'reviews___parent___internal___mediaType',
  ReviewsParentInternalOwner = 'reviews___parent___internal___owner',
  ReviewsParentInternalType = 'reviews___parent___internal___type',
  ReviewsChildren = 'reviews___children',
  ReviewsChildrenId = 'reviews___children___id',
  ReviewsChildrenParentId = 'reviews___children___parent___id',
  ReviewsChildrenParentChildren = 'reviews___children___parent___children',
  ReviewsChildrenChildren = 'reviews___children___children',
  ReviewsChildrenChildrenId = 'reviews___children___children___id',
  ReviewsChildrenChildrenChildren = 'reviews___children___children___children',
  ReviewsChildrenInternalContent = 'reviews___children___internal___content',
  ReviewsChildrenInternalContentDigest = 'reviews___children___internal___contentDigest',
  ReviewsChildrenInternalDescription = 'reviews___children___internal___description',
  ReviewsChildrenInternalFieldOwners = 'reviews___children___internal___fieldOwners',
  ReviewsChildrenInternalIgnoreType = 'reviews___children___internal___ignoreType',
  ReviewsChildrenInternalMediaType = 'reviews___children___internal___mediaType',
  ReviewsChildrenInternalOwner = 'reviews___children___internal___owner',
  ReviewsChildrenInternalType = 'reviews___children___internal___type',
  ReviewsInternalContent = 'reviews___internal___content',
  ReviewsInternalContentDigest = 'reviews___internal___contentDigest',
  ReviewsInternalDescription = 'reviews___internal___description',
  ReviewsInternalFieldOwners = 'reviews___internal___fieldOwners',
  ReviewsInternalIgnoreType = 'reviews___internal___ignoreType',
  ReviewsInternalMediaType = 'reviews___internal___mediaType',
  ReviewsInternalOwner = 'reviews___internal___owner',
  ReviewsInternalType = 'reviews___internal___type',
  ReviewsRating = 'reviews___rating',
  ReviewsVotes = 'reviews___votes',
  ReviewsSpoilerFlag = 'reviews___spoiler_flag',
  ReviewsSpoilersState = 'reviews___spoilers_state',
  ReviewsRecommendedFor = 'reviews___recommended_for',
  ReviewsRecommendedBy = 'reviews___recommended_by',
  ReviewsStartedAt = 'reviews___started_at',
  ReviewsReadAt = 'reviews___read_at',
  ReviewsDateAdded = 'reviews___date_added',
  ReviewsDateUpdated = 'reviews___date_updated',
  ReviewsReadCount = 'reviews___read_count',
  ReviewsBody = 'reviews___body',
  ReviewsCommentsCount = 'reviews___comments_count',
  ReviewsUrl = 'reviews___url',
  ReviewsLink = 'reviews___link',
  ReviewsOwned = 'reviews___owned',
  ReviewsGoodreadsId = 'reviews___goodreadsId',
  ReviewsBookId = 'reviews___book___id',
  ReviewsBookParentId = 'reviews___book___parent___id',
  ReviewsBookParentChildren = 'reviews___book___parent___children',
  ReviewsBookChildren = 'reviews___book___children',
  ReviewsBookChildrenId = 'reviews___book___children___id',
  ReviewsBookChildrenChildren = 'reviews___book___children___children',
  ReviewsBookInternalContent = 'reviews___book___internal___content',
  ReviewsBookInternalContentDigest = 'reviews___book___internal___contentDigest',
  ReviewsBookInternalDescription = 'reviews___book___internal___description',
  ReviewsBookInternalFieldOwners = 'reviews___book___internal___fieldOwners',
  ReviewsBookInternalIgnoreType = 'reviews___book___internal___ignoreType',
  ReviewsBookInternalMediaType = 'reviews___book___internal___mediaType',
  ReviewsBookInternalOwner = 'reviews___book___internal___owner',
  ReviewsBookInternalType = 'reviews___book___internal___type',
  ReviewsBookIsbn = 'reviews___book___isbn',
  ReviewsBookIsbn13 = 'reviews___book___isbn13',
  ReviewsBookTextReviewsCount = 'reviews___book___text_reviews_count',
  ReviewsBookUri = 'reviews___book___uri',
  ReviewsBookTitle = 'reviews___book___title',
  ReviewsBookTitleWithoutSeries = 'reviews___book___title_without_series',
  ReviewsBookImageUrl = 'reviews___book___image_url',
  ReviewsBookSmallImageUrl = 'reviews___book___small_image_url',
  ReviewsBookLargeImageUrl = 'reviews___book___large_image_url',
  ReviewsBookLink = 'reviews___book___link',
  ReviewsBookNumPages = 'reviews___book___num_pages',
  ReviewsBookFormat = 'reviews___book___format',
  ReviewsBookEditionInformation = 'reviews___book___edition_information',
  ReviewsBookPublisher = 'reviews___book___publisher',
  ReviewsBookPublicationDay = 'reviews___book___publication_day',
  ReviewsBookPublicationYear = 'reviews___book___publication_year',
  ReviewsBookPublicationMonth = 'reviews___book___publication_month',
  ReviewsBookAverageRating = 'reviews___book___average_rating',
  ReviewsBookRatingsCount = 'reviews___book___ratings_count',
  ReviewsBookDescription = 'reviews___book___description',
  ReviewsBookPublished = 'reviews___book___published',
  ReviewsBookWorkId = 'reviews___book___work___id',
  ReviewsBookWorkUri = 'reviews___book___work___uri',
  ReviewsBookGoodreadsId = 'reviews___book___goodreadsId',
  ReviewsBookReviews = 'reviews___book___reviews',
  ReviewsBookReviewsId = 'reviews___book___reviews___id',
  ReviewsBookReviewsChildren = 'reviews___book___reviews___children',
  ReviewsBookReviewsRating = 'reviews___book___reviews___rating',
  ReviewsBookReviewsVotes = 'reviews___book___reviews___votes',
  ReviewsBookReviewsSpoilerFlag = 'reviews___book___reviews___spoiler_flag',
  ReviewsBookReviewsSpoilersState = 'reviews___book___reviews___spoilers_state',
  ReviewsBookReviewsRecommendedFor = 'reviews___book___reviews___recommended_for',
  ReviewsBookReviewsRecommendedBy = 'reviews___book___reviews___recommended_by',
  ReviewsBookReviewsStartedAt = 'reviews___book___reviews___started_at',
  ReviewsBookReviewsReadAt = 'reviews___book___reviews___read_at',
  ReviewsBookReviewsDateAdded = 'reviews___book___reviews___date_added',
  ReviewsBookReviewsDateUpdated = 'reviews___book___reviews___date_updated',
  ReviewsBookReviewsReadCount = 'reviews___book___reviews___read_count',
  ReviewsBookReviewsBody = 'reviews___book___reviews___body',
  ReviewsBookReviewsCommentsCount = 'reviews___book___reviews___comments_count',
  ReviewsBookReviewsUrl = 'reviews___book___reviews___url',
  ReviewsBookReviewsLink = 'reviews___book___reviews___link',
  ReviewsBookReviewsOwned = 'reviews___book___reviews___owned',
  ReviewsBookReviewsGoodreadsId = 'reviews___book___reviews___goodreadsId',
  ReviewsBookAuthors = 'reviews___book___authors',
  ReviewsBookAuthorsId = 'reviews___book___authors___id',
  ReviewsBookAuthorsChildren = 'reviews___book___authors___children',
  ReviewsBookAuthorsName = 'reviews___book___authors___name',
  ReviewsBookAuthorsRole = 'reviews___book___authors___role',
  ReviewsBookAuthorsImageUrl = 'reviews___book___authors___image_url',
  ReviewsBookAuthorsSmallImageUrl = 'reviews___book___authors___small_image_url',
  ReviewsBookAuthorsLink = 'reviews___book___authors___link',
  ReviewsBookAuthorsAverageRating = 'reviews___book___authors___average_rating',
  ReviewsBookAuthorsRatingsCount = 'reviews___book___authors___ratings_count',
  ReviewsBookAuthorsTextReviewsCount = 'reviews___book___authors___text_reviews_count',
  ReviewsBookAuthorsGoodreadsId = 'reviews___book___authors___goodreadsId',
  ReviewsBookAuthorsBooks = 'reviews___book___authors___books',
  Sortable = 'sortable'
}

export type GoodreadsShelfFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  exclusive?: Maybe<StringQueryOperatorInput>,
  review_shelf_id?: Maybe<StringQueryOperatorInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  reviews?: Maybe<GoodreadsReviewFilterListInput>,
  sortable?: Maybe<StringQueryOperatorInput>,
};

export type GoodreadsShelfGroupConnection = {
   __typename?: 'GoodreadsShelfGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GoodreadsShelfEdge>,
  nodes: Array<GoodreadsShelf>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GoodreadsShelfSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsShelfFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type GraphQlSource = Node & {
   __typename?: 'GraphQLSource',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  typeName?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
};

export type GraphQlSourceConnection = {
   __typename?: 'GraphQLSourceConnection',
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GraphQlSourceGroupConnection>,
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GraphQlSourceFieldsEnum
};

export type GraphQlSourceEdge = {
   __typename?: 'GraphQLSourceEdge',
  next?: Maybe<GraphQlSource>,
  node: GraphQlSource,
  previous?: Maybe<GraphQlSource>,
};

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName'
}

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>,
};

export type GraphQlSourceGroupConnection = {
   __typename?: 'GraphQLSourceGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  fields?: Maybe<MarkdownRemarkFields>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
   __typename?: 'MarkdownRemarkFields',
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTime>,
  slug?: Maybe<Scalars['String']>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterFeaturedImageSourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
  FrontmatterFeaturedImageAbsolutePath = 'frontmatter___featuredImage___absolutePath',
  FrontmatterFeaturedImageRelativePath = 'frontmatter___featuredImage___relativePath',
  FrontmatterFeaturedImageExtension = 'frontmatter___featuredImage___extension',
  FrontmatterFeaturedImageSize = 'frontmatter___featuredImage___size',
  FrontmatterFeaturedImagePrettySize = 'frontmatter___featuredImage___prettySize',
  FrontmatterFeaturedImageModifiedTime = 'frontmatter___featuredImage___modifiedTime',
  FrontmatterFeaturedImageAccessTime = 'frontmatter___featuredImage___accessTime',
  FrontmatterFeaturedImageChangeTime = 'frontmatter___featuredImage___changeTime',
  FrontmatterFeaturedImageBirthTime = 'frontmatter___featuredImage___birthTime',
  FrontmatterFeaturedImageRoot = 'frontmatter___featuredImage___root',
  FrontmatterFeaturedImageDir = 'frontmatter___featuredImage___dir',
  FrontmatterFeaturedImageBase = 'frontmatter___featuredImage___base',
  FrontmatterFeaturedImageExt = 'frontmatter___featuredImage___ext',
  FrontmatterFeaturedImageName = 'frontmatter___featuredImage___name',
  FrontmatterFeaturedImageRelativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
  FrontmatterFeaturedImageDev = 'frontmatter___featuredImage___dev',
  FrontmatterFeaturedImageMode = 'frontmatter___featuredImage___mode',
  FrontmatterFeaturedImageNlink = 'frontmatter___featuredImage___nlink',
  FrontmatterFeaturedImageUid = 'frontmatter___featuredImage___uid',
  FrontmatterFeaturedImageGid = 'frontmatter___featuredImage___gid',
  FrontmatterFeaturedImageRdev = 'frontmatter___featuredImage___rdev',
  FrontmatterFeaturedImageIno = 'frontmatter___featuredImage___ino',
  FrontmatterFeaturedImageAtimeMs = 'frontmatter___featuredImage___atimeMs',
  FrontmatterFeaturedImageMtimeMs = 'frontmatter___featuredImage___mtimeMs',
  FrontmatterFeaturedImageCtimeMs = 'frontmatter___featuredImage___ctimeMs',
  FrontmatterFeaturedImageAtime = 'frontmatter___featuredImage___atime',
  FrontmatterFeaturedImageMtime = 'frontmatter___featuredImage___mtime',
  FrontmatterFeaturedImageCtime = 'frontmatter___featuredImage___ctime',
  FrontmatterFeaturedImageBirthtime = 'frontmatter___featuredImage___birthtime',
  FrontmatterFeaturedImageBirthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
  FrontmatterFeaturedImageBlksize = 'frontmatter___featuredImage___blksize',
  FrontmatterFeaturedImageBlocks = 'frontmatter___featuredImage___blocks',
  FrontmatterFeaturedImagePublicUrl = 'frontmatter___featuredImage___publicURL',
  FrontmatterFeaturedImageChildImageSharpId = 'frontmatter___featuredImage___childImageSharp___id',
  FrontmatterFeaturedImageChildImageSharpChildren = 'frontmatter___featuredImage___childImageSharp___children',
  FrontmatterFeaturedImageId = 'frontmatter___featuredImage___id',
  FrontmatterFeaturedImageParentId = 'frontmatter___featuredImage___parent___id',
  FrontmatterFeaturedImageParentChildren = 'frontmatter___featuredImage___parent___children',
  FrontmatterFeaturedImageChildren = 'frontmatter___featuredImage___children',
  FrontmatterFeaturedImageChildrenId = 'frontmatter___featuredImage___children___id',
  FrontmatterFeaturedImageChildrenChildren = 'frontmatter___featuredImage___children___children',
  FrontmatterFeaturedImageInternalContent = 'frontmatter___featuredImage___internal___content',
  FrontmatterFeaturedImageInternalContentDigest = 'frontmatter___featuredImage___internal___contentDigest',
  FrontmatterFeaturedImageInternalDescription = 'frontmatter___featuredImage___internal___description',
  FrontmatterFeaturedImageInternalFieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
  FrontmatterFeaturedImageInternalIgnoreType = 'frontmatter___featuredImage___internal___ignoreType',
  FrontmatterFeaturedImageInternalMediaType = 'frontmatter___featuredImage___internal___mediaType',
  FrontmatterFeaturedImageInternalOwner = 'frontmatter___featuredImage___internal___owner',
  FrontmatterFeaturedImageInternalType = 'frontmatter___featuredImage___internal___type',
  FrontmatterFeaturedImageChildMarkdownRemarkId = 'frontmatter___featuredImage___childMarkdownRemark___id',
  FrontmatterFeaturedImageChildMarkdownRemarkExcerpt = 'frontmatter___featuredImage___childMarkdownRemark___excerpt',
  FrontmatterFeaturedImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___featuredImage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterFeaturedImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___featuredImage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterFeaturedImageChildMarkdownRemarkHtml = 'frontmatter___featuredImage___childMarkdownRemark___html',
  FrontmatterFeaturedImageChildMarkdownRemarkHtmlAst = 'frontmatter___featuredImage___childMarkdownRemark___htmlAst',
  FrontmatterFeaturedImageChildMarkdownRemarkExcerptAst = 'frontmatter___featuredImage___childMarkdownRemark___excerptAst',
  FrontmatterFeaturedImageChildMarkdownRemarkHeadings = 'frontmatter___featuredImage___childMarkdownRemark___headings',
  FrontmatterFeaturedImageChildMarkdownRemarkTimeToRead = 'frontmatter___featuredImage___childMarkdownRemark___timeToRead',
  FrontmatterFeaturedImageChildMarkdownRemarkTableOfContents = 'frontmatter___featuredImage___childMarkdownRemark___tableOfContents',
  FrontmatterFeaturedImageChildMarkdownRemarkChildren = 'frontmatter___featuredImage___childMarkdownRemark___children',
  FrontmatterFeaturedImageCredit = 'frontmatter___featuredImageCredit',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterLastUpdated = 'frontmatter___lastUpdated',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsReadingTimeText = 'fields___readingTime___text',
  FieldsReadingTimeMinutes = 'fields___readingTime___minutes',
  FieldsReadingTimeTime = 'fields___readingTime___time',
  FieldsReadingTimeWords = 'fields___readingTime___words',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTimeFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFieldsReadingTime = {
   __typename?: 'MarkdownRemarkFieldsReadingTime',
  text?: Maybe<Scalars['String']>,
  minutes?: Maybe<Scalars['Float']>,
  time?: Maybe<Scalars['Float']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownRemarkFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>,
  minutes?: Maybe<FloatQueryOperatorInput>,
  time?: Maybe<FloatQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
   __typename?: 'MarkdownRemarkFrontmatter',
  title?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  featuredImage?: Maybe<File>,
  featuredImageCredit?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  lastUpdated?: Maybe<Scalars['Date']>,
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type MarkdownRemarkFrontmatterLastUpdatedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  featuredImage?: Maybe<FileFilterInput>,
  featuredImageCredit?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  lastUpdated?: Maybe<DateQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  goodreadsShelf?: Maybe<GoodreadsShelf>,
  allGoodreadsShelf: GoodreadsShelfConnection,
  goodreadsBook?: Maybe<GoodreadsBook>,
  allGoodreadsBook: GoodreadsBookConnection,
  goodreadsAuthor?: Maybe<GoodreadsAuthor>,
  allGoodreadsAuthor: GoodreadsAuthorConnection,
  goodreadsReview?: Maybe<GoodreadsReview>,
  allGoodreadsReview: GoodreadsReviewConnection,
  feedRubberDucking?: Maybe<FeedRubberDucking>,
  allFeedRubberDucking: FeedRubberDuckingConnection,
  graphQlSource?: Maybe<GraphQlSource>,
  allGraphQlSource: GraphQlSourceConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  github: GitHub,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGoodreadsShelfArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  exclusive?: Maybe<StringQueryOperatorInput>,
  review_shelf_id?: Maybe<StringQueryOperatorInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  reviews?: Maybe<GoodreadsReviewFilterListInput>,
  sortable?: Maybe<StringQueryOperatorInput>
};


export type QueryAllGoodreadsShelfArgs = {
  filter?: Maybe<GoodreadsShelfFilterInput>,
  sort?: Maybe<GoodreadsShelfSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGoodreadsBookArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isbn?: Maybe<StringQueryOperatorInput>,
  isbn13?: Maybe<StringQueryOperatorInput>,
  text_reviews_count?: Maybe<StringQueryOperatorInput>,
  uri?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  title_without_series?: Maybe<StringQueryOperatorInput>,
  image_url?: Maybe<StringQueryOperatorInput>,
  small_image_url?: Maybe<StringQueryOperatorInput>,
  large_image_url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  num_pages?: Maybe<StringQueryOperatorInput>,
  format?: Maybe<StringQueryOperatorInput>,
  edition_information?: Maybe<StringQueryOperatorInput>,
  publisher?: Maybe<StringQueryOperatorInput>,
  publication_day?: Maybe<StringQueryOperatorInput>,
  publication_year?: Maybe<DateQueryOperatorInput>,
  publication_month?: Maybe<StringQueryOperatorInput>,
  average_rating?: Maybe<StringQueryOperatorInput>,
  ratings_count?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  published?: Maybe<DateQueryOperatorInput>,
  work?: Maybe<GoodreadsBookWorkFilterInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  reviews?: Maybe<GoodreadsReviewFilterListInput>,
  authors?: Maybe<GoodreadsAuthorFilterListInput>
};


export type QueryAllGoodreadsBookArgs = {
  filter?: Maybe<GoodreadsBookFilterInput>,
  sort?: Maybe<GoodreadsBookSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGoodreadsAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  role?: Maybe<StringQueryOperatorInput>,
  image_url?: Maybe<StringQueryOperatorInput>,
  small_image_url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  average_rating?: Maybe<StringQueryOperatorInput>,
  ratings_count?: Maybe<StringQueryOperatorInput>,
  text_reviews_count?: Maybe<StringQueryOperatorInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  books?: Maybe<GoodreadsBookFilterListInput>
};


export type QueryAllGoodreadsAuthorArgs = {
  filter?: Maybe<GoodreadsAuthorFilterInput>,
  sort?: Maybe<GoodreadsAuthorSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGoodreadsReviewArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  rating?: Maybe<StringQueryOperatorInput>,
  votes?: Maybe<StringQueryOperatorInput>,
  spoiler_flag?: Maybe<StringQueryOperatorInput>,
  spoilers_state?: Maybe<StringQueryOperatorInput>,
  recommended_for?: Maybe<StringQueryOperatorInput>,
  recommended_by?: Maybe<StringQueryOperatorInput>,
  started_at?: Maybe<StringQueryOperatorInput>,
  read_at?: Maybe<StringQueryOperatorInput>,
  date_added?: Maybe<StringQueryOperatorInput>,
  date_updated?: Maybe<StringQueryOperatorInput>,
  read_count?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  comments_count?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  owned?: Maybe<StringQueryOperatorInput>,
  goodreadsId?: Maybe<StringQueryOperatorInput>,
  book?: Maybe<GoodreadsBookFilterInput>
};


export type QueryAllGoodreadsReviewArgs = {
  filter?: Maybe<GoodreadsReviewFilterInput>,
  sort?: Maybe<GoodreadsReviewSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFeedRubberDuckingArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  creator?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  pubDate?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  enclosure?: Maybe<FeedRubberDuckingEnclosureFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<FeedRubberDuckingContentFilterInput>,
  contentSnippet?: Maybe<StringQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  isoDate?: Maybe<DateQueryOperatorInput>,
  itunes?: Maybe<FeedRubberDuckingItunesFilterInput>
};


export type QueryAllFeedRubberDuckingArgs = {
  filter?: Maybe<FeedRubberDuckingFilterInput>,
  sort?: Maybe<FeedRubberDuckingSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>,
  sort?: Maybe<GraphQlSourceSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataSocialGithub = 'siteMetadata___social___github',
  SiteMetadataSocialGoodreads = 'siteMetadata___social___goodreads',
  SiteMetadataSocialLinkedin = 'siteMetadata___social___linkedin',
  SiteMetadataSocialStackOverflow = 'siteMetadata___social___stackOverflow',
  SiteMetadataOtherPodcasts = 'siteMetadata___otherPodcasts',
  SiteMetadataOtherPodcastsGuid = 'siteMetadata___otherPodcasts___guid',
  SiteMetadataOtherPodcastsTitle = 'siteMetadata___otherPodcasts___title',
  SiteMetadataOtherPodcastsLink = 'siteMetadata___otherPodcasts___link',
  SiteMetadataOtherPodcastsItunesImage = 'siteMetadata___otherPodcasts___itunes___image',
  SiteMetadataTalks = 'siteMetadata___talks',
  SiteMetadataTalksId = 'siteMetadata___talks___id',
  SiteMetadataTalksTitle = 'siteMetadata___talks___title',
  SiteMetadataTalksDescription = 'siteMetadata___talks___description',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  slug?: Maybe<Scalars['String']>,
  previousId?: Maybe<Scalars['String']>,
  nextId?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
  previousId?: Maybe<StringQueryOperatorInput>,
  nextId?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  ContextPreviousId = 'context___previousId',
  ContextNextId = 'context___nextId',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsPathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsIgnoreFileExtensions = 'pluginCreator___pluginOptions___ignoreFileExtensions',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsParserOptionMaxRedirects = 'pluginCreator___pluginOptions___parserOption___maxRedirects',
  PluginCreatorPluginOptionsParserOptionTimeout = 'pluginCreator___pluginOptions___parserOption___timeout',
  PluginCreatorPluginOptionsKey = 'pluginCreator___pluginOptions___key',
  PluginCreatorPluginOptionsId = 'pluginCreator___pluginOptions___id',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsHeadersAuthorization = 'pluginCreator___pluginOptions___headers___Authorization',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsPathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsPluginOptionsIgnoreFileExtensions = 'pluginOptions___plugins___pluginOptions___ignoreFileExtensions',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsParserOptionCustomFieldsItem = 'pluginOptions___parserOption___customFields___item',
  PluginOptionsParserOptionMaxRedirects = 'pluginOptions___parserOption___maxRedirects',
  PluginOptionsParserOptionTimeout = 'pluginOptions___parserOption___timeout',
  PluginOptionsKey = 'pluginOptions___key',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsHeadersAuthorization = 'pluginOptions___headers___Authorization',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  path?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  backgroundColor?: Maybe<Scalars['String']>,
  pathPrefix?: Maybe<Scalars['String']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  disableBgImage?: Maybe<Scalars['Boolean']>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  pathToConfigModule?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  parserOption?: Maybe<SitePluginPluginOptionsParserOption>,
  key?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
  typeName?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  headers?: Maybe<SitePluginPluginOptionsHeaders>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  pathToConfigModule?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  parserOption?: Maybe<SitePluginPluginOptionsParserOptionFilterInput>,
  key?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>,
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>,
};

export type SitePluginPluginOptionsHeaders = {
   __typename?: 'SitePluginPluginOptionsHeaders',
  Authorization?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsParserOption = {
   __typename?: 'SitePluginPluginOptionsParserOption',
  customFields?: Maybe<SitePluginPluginOptionsParserOptionCustomFields>,
  maxRedirects?: Maybe<Scalars['Int']>,
  timeout?: Maybe<Scalars['Int']>,
};

export type SitePluginPluginOptionsParserOptionCustomFields = {
   __typename?: 'SitePluginPluginOptionsParserOptionCustomFields',
  item?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsParserOptionCustomFieldsFilterInput = {
  item?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsParserOptionFilterInput = {
  customFields?: Maybe<SitePluginPluginOptionsParserOptionCustomFieldsFilterInput>,
  maxRedirects?: Maybe<IntQueryOperatorInput>,
  timeout?: Maybe<IntQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  maxWidth?: Maybe<Scalars['Int']>,
  backgroundColor?: Maybe<Scalars['String']>,
  pathPrefix?: Maybe<Scalars['String']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  disableBgImage?: Maybe<Scalars['Boolean']>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  social?: Maybe<SiteSiteMetadataSocial>,
  otherPodcasts?: Maybe<Array<Maybe<SiteSiteMetadataOtherPodcasts>>>,
  talks?: Maybe<Array<Maybe<SiteSiteMetadataTalks>>>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  social?: Maybe<SiteSiteMetadataSocialFilterInput>,
  otherPodcasts?: Maybe<SiteSiteMetadataOtherPodcastsFilterListInput>,
  talks?: Maybe<SiteSiteMetadataTalksFilterListInput>,
};

export type SiteSiteMetadataOtherPodcasts = {
   __typename?: 'SiteSiteMetadataOtherPodcasts',
  guid?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  itunes?: Maybe<SiteSiteMetadataOtherPodcastsItunes>,
};

export type SiteSiteMetadataOtherPodcastsFilterInput = {
  guid?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  itunes?: Maybe<SiteSiteMetadataOtherPodcastsItunesFilterInput>,
};

export type SiteSiteMetadataOtherPodcastsFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataOtherPodcastsFilterInput>,
};

export type SiteSiteMetadataOtherPodcastsItunes = {
   __typename?: 'SiteSiteMetadataOtherPodcastsItunes',
  image?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataOtherPodcastsItunesFilterInput = {
  image?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataSocial = {
   __typename?: 'SiteSiteMetadataSocial',
  twitter?: Maybe<Scalars['String']>,
  github?: Maybe<Scalars['String']>,
  goodreads?: Maybe<Scalars['String']>,
  linkedin?: Maybe<Scalars['String']>,
  stackOverflow?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>,
  github?: Maybe<StringQueryOperatorInput>,
  goodreads?: Maybe<StringQueryOperatorInput>,
  linkedin?: Maybe<StringQueryOperatorInput>,
  stackOverflow?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataTalks = {
   __typename?: 'SiteSiteMetadataTalks',
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataTalksFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataTalksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataTalksFilterInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type BioQueryQueryVariables = {};


export type BioQueryQuery = (
  { __typename?: 'Query' }
  & { avatar: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fixed: Maybe<(
        { __typename?: 'ImageSharpFixed' }
        & GatsbyImageSharpFixedFragment
      )> }
    )> }
  )>, site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'author'>
      & { social: Maybe<(
        { __typename?: 'SiteSiteMetadataSocial' }
        & Pick<SiteSiteMetadataSocial, 'twitter'>
      )> }
    )> }
  )> }
);

export type BlogPostDataFragment = (
  { __typename?: 'MarkdownRemark' }
  & Pick<MarkdownRemark, 'excerpt'>
  & { fields: Maybe<(
    { __typename?: 'MarkdownRemarkFields' }
    & Pick<MarkdownRemarkFields, 'slug'>
  )>, frontmatter: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & Pick<MarkdownRemarkFrontmatter, 'date' | 'title' | 'description'>
    & { featuredImage: Maybe<(
      { __typename?: 'File' }
      & { childImageSharp: Maybe<(
        { __typename?: 'ImageSharp' }
        & { fluid: Maybe<(
          { __typename?: 'ImageSharpFluid' }
          & GatsbyImageSharpFluidFragment
        )> }
      )> }
    )> }
  )> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { allGoodreadsShelf: (
    { __typename?: 'GoodreadsShelfConnection' }
    & { edges: Array<(
      { __typename?: 'GoodreadsShelfEdge' }
      & { node: (
        { __typename?: 'GoodreadsShelf' }
        & Pick<GoodreadsShelf, 'id' | 'name'>
        & { reviews: Maybe<Array<Maybe<(
          { __typename?: 'GoodreadsReview' }
          & Pick<GoodreadsReview, 'id' | 'read_at'>
          & { book: Maybe<(
            { __typename?: 'GoodreadsBook' }
            & Pick<GoodreadsBook, 'id' | 'title' | 'image_url' | 'link'>
          )> }
        )>>> }
      ) }
    )> }
  ) }
);

export type FooterQueryQueryVariables = {};


export type FooterQueryQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & { social: Maybe<(
        { __typename?: 'SiteSiteMetadataSocial' }
        & Pick<SiteSiteMetadataSocial, 'twitter' | 'github' | 'goodreads' | 'linkedin' | 'stackOverflow'>
      )> }
    )> }
  )> }
);

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { github: (
    { __typename?: 'GitHub' }
    & { viewer: (
      { __typename?: 'GitHub_User' }
      & { pinnedItems: (
        { __typename?: 'GitHub_PinnableItemConnection' }
        & { nodes: Maybe<Array<Maybe<{ __typename?: 'GitHub_Gist' } | (
          { __typename?: 'GitHub_Repository' }
          & Pick<GitHub_Repository, 'id' | 'name' | 'description' | 'homepageUrl' | 'forkCount'>
          & { stargazers: (
            { __typename?: 'GitHub_StargazerConnection' }
            & Pick<GitHub_StargazerConnection, 'totalCount'>
          ) }
        )>>> }
      ) }
    ) }
  ) }
);

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & { otherPodcasts: Maybe<Array<Maybe<(
        { __typename?: 'SiteSiteMetadataOtherPodcasts' }
        & Pick<SiteSiteMetadataOtherPodcasts, 'guid' | 'title' | 'link'>
        & { itunes: Maybe<(
          { __typename?: 'SiteSiteMetadataOtherPodcastsItunes' }
          & Pick<SiteSiteMetadataOtherPodcastsItunes, 'image'>
        )> }
      )>>> }
    )> }
  )>, allFeedRubberDucking: (
    { __typename?: 'FeedRubberDuckingConnection' }
    & { edges: Array<(
      { __typename?: 'FeedRubberDuckingEdge' }
      & { node: (
        { __typename?: 'FeedRubberDucking' }
        & Pick<FeedRubberDucking, 'guid' | 'title' | 'link'>
        & { itunes: Maybe<(
          { __typename?: 'FeedRubberDuckingItunes' }
          & Pick<FeedRubberDuckingItunes, 'image'>
        )> }
      ) }
    )> }
  ) }
);

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>
      & { social: Maybe<(
        { __typename?: 'SiteSiteMetadataSocial' }
        & Pick<SiteSiteMetadataSocial, 'twitter'>
      )> }
    )> }
  )> }
);

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & { talks: Maybe<Array<Maybe<(
        { __typename?: 'SiteSiteMetadataTalks' }
        & Pick<SiteSiteMetadataTalks, 'id' | 'title' | 'description'>
      )>>> }
    )> }
  )> }
);

export type Unnamed_6_QueryVariables = {};


export type Unnamed_6_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )> }
);

export type Unnamed_7_QueryVariables = {};


export type Unnamed_7_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )>, allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
          & { featuredImage: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp: Maybe<(
              { __typename?: 'ImageSharp' }
              & { fluid: Maybe<(
                { __typename?: 'ImageSharpFluid' }
                & GatsbyImageSharpFluidFragment
              )> }
            )> }
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type Unnamed_8_QueryVariables = {};


export type Unnamed_8_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )>, allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & BlogPostDataFragment
      ) }
    )> }
  ) }
);

export type Unnamed_9_QueryVariables = {};


export type Unnamed_9_Query = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )>, allGoodreadsShelf: (
    { __typename?: 'GoodreadsShelfConnection' }
    & { edges: Array<(
      { __typename?: 'GoodreadsShelfEdge' }
      & { node: (
        { __typename?: 'GoodreadsShelf' }
        & Pick<GoodreadsShelf, 'id' | 'name'>
        & { reviews: Maybe<Array<Maybe<(
          { __typename?: 'GoodreadsReview' }
          & Pick<GoodreadsReview, 'id' | 'read_at'>
          & { book: Maybe<(
            { __typename?: 'GoodreadsBook' }
            & Pick<GoodreadsBook, 'id' | 'title' | 'image_url' | 'small_image_url' | 'large_image_url' | 'link' | 'isbn'>
          )> }
        )>>> }
      ) }
    )> }
  ) }
);

export type BlogPostBySlugQueryVariables = {
  slug: Scalars['String'],
  nextId: Scalars['String'],
  previousId: Scalars['String']
};


export type BlogPostBySlugQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'author'>
    )> }
  )>, previous: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & BlogPostDataFragment
  )>, next: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & BlogPostDataFragment
  )>, markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'id' | 'excerpt' | 'html'>
    & { fields: Maybe<(
      { __typename?: 'MarkdownRemarkFields' }
      & Pick<MarkdownRemarkFields, 'slug'>
      & { readingTime: Maybe<(
        { __typename?: 'MarkdownRemarkFieldsReadingTime' }
        & Pick<MarkdownRemarkFieldsReadingTime, 'text'>
      )> }
    )>, frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'lastUpdated' | 'description' | 'featuredImageCredit' | 'tags'>
      & { featuredImage: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp: Maybe<(
          { __typename?: 'ImageSharp' }
          & { fluid: Maybe<(
            { __typename?: 'ImageSharpFluid' }
            & GatsbyImageSharpFluidFragment
          )>, fixed: Maybe<(
            { __typename?: 'ImageSharpFixed' }
            & Pick<ImageSharpFixed, 'src'>
          )> }
        )> }
      )> }
    )> }
  )> }
);
