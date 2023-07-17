/* eslint-disable */
/**
 * Types in this file were automatically generated from "https://socialife-backend-production.up.railway.app/api-json"
 * documentation using open-api-generator. Do NOT modify this file.
 */

/**
 *
 * @export
 * @interface ChangePasswordDto
 */
export interface ChangePasswordDto {
  /**
   *
   * @type {string}
   * @memberof ChangePasswordDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ChangePasswordDto
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof ChangePasswordDto
   */
  newPassword: string;
}
/**
 *
 * @export
 * @interface CreateEventDto
 */
export interface CreateEventDto {
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  startDate: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  endDate?: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  locationName?: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  locationRef?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateEventDto
   */
  externalImageUrls?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  longitude: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  latitude: string;
  /**
   *
   * @type {string}
   * @memberof CreateEventDto
   */
  category: CreateEventDto.CategoryEnum;
}

/**
 * @export
 * @namespace CreateEventDto
 */
export namespace CreateEventDto {
  /**
   * @export
   * @enum {string}
   */
  export enum CategoryEnum {
    Music = "music",
    PopMusic = "pop-music",
    ElectronicMusic = "electronic-music",
    RockMusic = "rock-music",
    ClassicalMusic = "classical-music",
    CountryMusic = "country-music",
    AlternativeMusic = "alternative-music",
    FilmMusic = "film-music",
    Show = "show",
    Movies = "movies",
    Other = "other",
  }
}
/**
 *
 * @export
 * @interface CreatePaymentDto
 */
export interface CreatePaymentDto {
  /**
   *
   * @type {Array<PaymentTicketDto>}
   * @memberof CreatePaymentDto
   */
  tickets: Array<PaymentTicketDto>;
  /**
   *
   * @type {string}
   * @memberof CreatePaymentDto
   */
  bankName: string;
  /**
   *
   * @type {string}
   * @memberof CreatePaymentDto
   */
  lastFourDigits: string;
  /**
   *
   * @type {string}
   * @memberof CreatePaymentDto
   */
  paymentMethod: CreatePaymentDto.PaymentMethodEnum;
}

/**
 * @export
 * @namespace CreatePaymentDto
 */
export namespace CreatePaymentDto {
  /**
   * @export
   * @enum {string}
   */
  export enum PaymentMethodEnum {
    Card = "card",
    Transfer = "transfer",
    Blik = "blik",
  }
}
/**
 *
 * @export
 * @interface CreateTicketTypeDto
 */
export interface CreateTicketTypeDto {
  /**
   *
   * @type {string}
   * @memberof CreateTicketTypeDto
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof CreateTicketTypeDto
   */
  description?: string;
  /**
   *
   * @type {number}
   * @memberof CreateTicketTypeDto
   */
  price: number;
  /**
   *
   * @type {string}
   * @memberof CreateTicketTypeDto
   */
  availableTillDate?: string | null;
}
/**
 *
 * @export
 * @interface EventDto
 */
export interface EventDto {
  /**
   *
   * @type {number}
   * @memberof EventDto
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  startDate: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  endDate: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  locationName: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  locationRef: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  longitude: string;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  latitude: string;
  /**
   *
   * @type {boolean}
   * @memberof EventDto
   */
  isCanceled: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof EventDto
   */
  externalImageUrls: Array<string>;
  /**
   *
   * @type {string}
   * @memberof EventDto
   */
  category: EventDto.CategoryEnum;
  /**
   *
   * @type {OrganizationProfileDto}
   * @memberof EventDto
   */
  createdBy: OrganizationProfileDto;
  /**
   *
   * @type {Array<EventFileDto>}
   * @memberof EventDto
   */
  files?: Array<EventFileDto>;
  /**
   *
   * @type {Array<EventLikeDto>}
   * @memberof EventDto
   */
  likes?: Array<EventLikeDto>;
  /**
   *
   * @type {Array<TicketTypeDto>}
   * @memberof EventDto
   */
  ticketTypes?: Array<TicketTypeDto>;
  /**
   *
   * @type {Date}
   * @memberof EventDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof EventDto
   */
  editedAt?: Date;
}

/**
 * @export
 * @namespace EventDto
 */
export namespace EventDto {
  /**
   * @export
   * @enum {string}
   */
  export enum CategoryEnum {
    Music = "music",
    PopMusic = "pop-music",
    ElectronicMusic = "electronic-music",
    RockMusic = "rock-music",
    ClassicalMusic = "classical-music",
    CountryMusic = "country-music",
    AlternativeMusic = "alternative-music",
    FilmMusic = "film-music",
    Show = "show",
    Movies = "movies",
    Other = "other",
  }
}
/**
 *
 * @export
 * @interface EventFileDto
 */
export interface EventFileDto {
  /**
   *
   * @type {number}
   * @memberof EventFileDto
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof EventFileDto
   */
  isCoverImage?: boolean;
  /**
   *
   * @type {any}
   * @memberof EventFileDto
   */
  file: any;
  /**
   *
   * @type {EventDto}
   * @memberof EventFileDto
   */
  event: EventDto;
  /**
   *
   * @type {Date}
   * @memberof EventFileDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof EventFileDto
   */
  editedAt?: Date;
}
/**
 *
 * @export
 * @interface EventLikeDto
 */
export interface EventLikeDto {
  /**
   *
   * @type {number}
   * @memberof EventLikeDto
   */
  id: number;
  /**
   *
   * @type {ProfileDto}
   * @memberof EventLikeDto
   */
  user: ProfileDto;
  /**
   *
   * @type {EventDto}
   * @memberof EventLikeDto
   */
  event: EventDto;
  /**
   *
   * @type {Date}
   * @memberof EventLikeDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof EventLikeDto
   */
  editedAt?: Date;
}
/**
 *
 * @export
 * @interface GetPotentialPaymentDto
 */
export interface GetPotentialPaymentDto {
  tickets: PaymentTicketDto[];
  paymentMethod: CreatePaymentDto.PaymentMethodEnum;
}
/**
 *
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
  /**
   *
   * @type {number}
   * @memberof ModelFile
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  key: string;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  acl: string;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelFile
   */
  isOrganizationCover: boolean;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  type: ModelFile.TypeEnum;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  originalName: string;
  /**
   *
   * @type {number}
   * @memberof ModelFile
   */
  size: number;
  /**
   *
   * @type {string}
   * @memberof ModelFile
   */
  mimeType: string;
  /**
   *
   * @type {Array<EventFileDto>}
   * @memberof ModelFile
   */
  eventFiles: Array<EventFileDto>;
  /**
   *
   * @type {Date}
   * @memberof ModelFile
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof ModelFile
   */
  editedAt?: Date;
}

/**
 * @export
 * @namespace ModelFile
 */
export namespace ModelFile {
  /**
   * @export
   * @enum {string}
   */
  export enum TypeEnum {
    Image = "image",
  }
}
/**
 *
 * @export
 * @interface OrganizationProfileDto
 */
export interface OrganizationProfileDto {
  /**
   *
   * @type {number}
   * @memberof OrganizationProfileDto
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  coverUrl: string;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  website: string;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  region: OrganizationProfileDto.RegionEnum;
  /**
   *
   * @type {string}
   * @memberof OrganizationProfileDto
   */
  city: string;
  /**
   *
   * @type {Array<EventDto>}
   * @memberof OrganizationProfileDto
   */
  events?: Array<EventDto>;
  /**
   *
   * @type {UserDto}
   * @memberof OrganizationProfileDto
   */
  user?: UserDto;
  /**
   *
   * @type {Date}
   * @memberof OrganizationProfileDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof OrganizationProfileDto
   */
  editedAt?: Date;
}

/**
 * @export
 * @namespace OrganizationProfileDto
 */
export namespace OrganizationProfileDto {
  /**
   * @export
   * @enum {string}
   */
  export enum RegionEnum {
    PL = "PL",
    US = "US",
    DE = "DE",
    FR = "FR",
    CZ = "CZ",
    IT = "IT",
  }
}
/**
 *
 * @export
 * @interface PaymentDto
 */
export interface PaymentDto {
  /**
   *
   * @type {number}
   * @memberof PaymentDto
   */
  id: number;
  /**
   *
   * @type {number}
   * @memberof PaymentDto
   */
  netPrice: number;
  /**
   *
   * @type {number}
   * @memberof PaymentDto
   */
  totalPrice: number;
  /**
   *
   * @type {number}
   * @memberof PaymentDto
   */
  vat: number;
  /**
   *
   * @type {number}
   * @memberof PaymentDto
   */
  fees: number;
  /**
   *
   * @type {string}
   * @memberof PaymentDto
   */
  bankName: string;
  /**
   *
   * @type {string}
   * @memberof PaymentDto
   */
  lastFourDigits: string;
  /**
   *
   * @type {string}
   * @memberof PaymentDto
   */
  method: PaymentDto.MethodEnum;
  /**
   *
   * @type {string}
   * @memberof PaymentDto
   */
  status: PaymentDto.StatusEnum;
  /**
   *
   * @type {Array<TicketDto>}
   * @memberof PaymentDto
   */
  tickets: Array<TicketDto>;
  /**
   *
   * @type {ProfileDto}
   * @memberof PaymentDto
   */
  author: ProfileDto;
  /**
   *
   * @type {Date}
   * @memberof PaymentDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof PaymentDto
   */
  editedAt?: Date;
}

/**
 * @export
 * @namespace PaymentDto
 */
export namespace PaymentDto {
  /**
   * @export
   * @enum {string}
   */
  export enum MethodEnum {
    Card = "card",
    Transfer = "transfer",
    Blik = "blik",
  }
  /**
   * @export
   * @enum {string}
   */
  export enum StatusEnum {
    Processing = "processing",
    Paid = "paid",
  }
}
/**
 *
 * @export
 * @interface PaymentTicketDto
 */
export interface PaymentTicketDto {
  /**
   *
   * @type {number}
   * @memberof PaymentTicketDto
   */
  ticketTypeId: number;
  /**
   *
   * @type {number}
   * @memberof PaymentTicketDto
   */
  amount: number;
}
/**
 *
 * @export
 * @interface ProfileDto
 */
export interface ProfileDto {
  /**
   *
   * @type {number}
   * @memberof ProfileDto
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  firstName: string;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  lastName: string;
  /**
   *
   * @type {string}
   * @memberof ProfileDto
   */
  region: ProfileDto.RegionEnum;
  /**
   *
   * @type {Array<EventLikeDto>}
   * @memberof ProfileDto
   */
  eventLikes?: Array<EventLikeDto>;
  /**
   *
   * @type {Array<TicketDto>}
   * @memberof ProfileDto
   */
  tickets?: Array<TicketDto>;
  /**
   *
   * @type {Array<PaymentDto>}
   * @memberof ProfileDto
   */
  payments?: Array<PaymentDto>;
  /**
   *
   * @type {Date}
   * @memberof ProfileDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof ProfileDto
   */
  editedAt?: Date;
  likedEventsNumber: boolean;
}

/**
 * @export
 * @namespace ProfileDto
 */
export namespace ProfileDto {
  /**
   * @export
   * @enum {string}
   */
  export enum RegionEnum {
    PL = "PL",
    US = "US",
    DE = "DE",
    FR = "FR",
    CZ = "CZ",
    IT = "IT",
  }
}
/**
 *
 * @export
 * @interface RegisterDto
 */
export interface RegisterDto {
  /**
   *
   * @type {string}
   * @memberof RegisterDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof RegisterDto
   */
  password: string;
}
/**
 *
 * @export
 * @interface TicketDto
 */
export interface TicketDto {
  /**
   *
   * @type {number}
   * @memberof TicketDto
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof TicketDto
   */
  secret: string;
  /**
   *
   * @type {ProfileDto}
   * @memberof TicketDto
   */
  owner: ProfileDto;
  /**
   *
   * @type {TicketTypeDto}
   * @memberof TicketDto
   */
  type: TicketTypeDto;
  /**
   *
   * @type {PaymentDto}
   * @memberof TicketDto
   */
  payment: PaymentDto;
  /**
   *
   * @type {Date}
   * @memberof TicketDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof TicketDto
   */
  editedAt?: Date;
}
/**
 *
 * @export
 * @interface TicketTypeDto
 */
export interface TicketTypeDto {
  /**
   *
   * @type {number}
   * @memberof TicketTypeDto
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof TicketTypeDto
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof TicketTypeDto
   */
  description: string;
  /**
   *
   * @type {number}
   * @memberof TicketTypeDto
   */
  price: number;
  /**
   *
   * @type {boolean}
   * @memberof TicketTypeDto
   */
  isAvailable: boolean;
  /**
   *
   * @type {string}
   * @memberof TicketTypeDto
   */
  availableTillDate: string | null;
  /**
   *
   * @type {EventDto}
   * @memberof TicketTypeDto
   */
  event?: EventDto;
  /**
   *
   * @type {Array<TicketDto>}
   * @memberof TicketTypeDto
   */
  tickets?: Array<TicketDto>;
  /**
   *
   * @type {Date}
   * @memberof TicketTypeDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof TicketTypeDto
   */
  editedAt?: Date;
}
/**
 *
 * @export
 * @interface UpdateEventDto
 */
export interface UpdateEventDto {
  /**
   *
   * @type {boolean}
   * @memberof UpdateEventDto
   */
  isCanceled?: boolean;
}
/**
 *
 * @export
 * @interface UpdateFileDto
 */
export interface UpdateFileDto {}
/**
 *
 * @export
 * @interface UpdateTicketTypeDto
 */
export interface UpdateTicketTypeDto {
  /**
   *
   * @type {boolean}
   * @memberof UpdateTicketTypeDto
   */
  isAvailable?: boolean;
}
/**
 *
 * @export
 * @interface UserDto
 */
export interface UserDto {
  /**
   *
   * @type {number}
   * @memberof UserDto
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof UserDto
   */
  role: UserDto.RoleEnum;
  /**
   *
   * @type {ProfileDto}
   * @memberof UserDto
   */
  profile: ProfileDto;
  /**
   *
   * @type {OrganizationProfileDto}
   * @memberof UserDto
   */
  organizationProfile: OrganizationProfileDto;
  /**
   *
   * @type {Date}
   * @memberof UserDto
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof UserDto
   */
  editedAt?: Date;
}

/**
 * @export
 * @namespace UserDto
 */
export namespace UserDto {
  /**
   * @export
   * @enum {string}
   */
  export enum RoleEnum {
    Admin = "admin",
    Organization = "organization",
    User = "user",
  }
}
/**
 *
 * @export
 * @interface ValidateTicketDto
 */
export interface ValidateTicketDto {
  /**
   *
   * @type {number}
   * @memberof ValidateTicketDto
   */
  ticketTypeId: number;
  /**
   *
   * @type {number}
   * @memberof ValidateTicketDto
   */
  ticketId: number;
  /**
   *
   * @type {string}
   * @memberof ValidateTicketDto
   */
  ticketSecret: string;
}
