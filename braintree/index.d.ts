// Type definitions for braintree v1.42
// Project: https://github.com/braintree/braintree_node
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare function connect(config: ConnectOptions): BraintreeGateway;
export declare interface ConnectOptions {
    environment: Environment;
    merchantId: string;
    publicKey: string;
    privateKey: string;
}

export declare class Environment {
    static DEVELOPMENT_PORT: number;
    static Development: Environment;
    static Qa: Environment;
    static Sandbox: Environment;
    static Production: Environment;
    server: string;
    port: string;
    authUrl: string;
    ssl: boolean;
    constructor(server: string, port: string, authUrl: string, ssl: boolean);
    baseUrl(): string;
    uriScheme(): string;
}

declare interface BraintreeGateway {
    config: ConnectOptions;
    http: Http;
    addOn: AddOnGateway;
    address: AddressGateway;
    clientToken: ClientTokenGateway;
    creditCard: CreditCardGateway;
    creditCardVerification: CreditCardVerificationGateway;
    customer: CustomerGateway;
    disbursement: DisbursementGateway;
    discount: DiscountGateway;
    merchantAccount: MerchantAccountGateway;
    merchant: MerchantGateway;
    oauth: OAuthGateway;
    paymentMethod: PaymentMethodGateway;
    paymentMethodNonce: PaymentMethodNonceGateway;
    paypalAccount: PayPalAccountGateway;
    plan: PlanGateway;
    settlementBatchSummary: SettlementBatchSummaryGateway;
    subscription: SubscriptionGateway;
    testing: TestingGateway;
    transaction: TransactionGateway;
    transparentRedirect: TransparentRedirectGateway;
    usBankAccount: UsBankAccountGateway;
    webhookNotification: WebhookNotificationGateway;
    webhookTesting: WebhookTestingGateway;

}

// Errors and responses
export declare interface ErrorOnlyCallback {
    (err: Exception | null): void;
}
export declare interface ResponseCallback<T> {
    (err: Exception | null, response: ({ success: true } & T) | ErrorResponse): void;
}
export declare interface ObjectCallback<T> {
    (err: Exception | null, response: T | null): void;
}
export declare interface SearchResponseCallback<T> {
    (err: Exception | null, response: (SearchResponse<T> | ErrorResponse)): void;
}
declare interface Exception extends Error {
    type: string;
    name: string;
}
declare interface ErrorResponse {
    success: false;
    errors: ValidationErrorsCollection;
    transaction?: Transaction;
}
declare interface ValidationError {
    attribute: string;
    code: string;
    message: string;
}
declare interface ValidationErrorsCollection {
    validationErrors: { [index: string]: ValidationError | undefined };
    errorCollections: { [index: string]: ValidationErrorsCollection | undefined };
    buildErrors(errors: any): void;
    deepErrors(): Array<ValidationErrorsCollection | ValidationError>;
    for(name: string): ValidationErrorsCollection | undefined;
    forIndex(index: string): ValidationErrorsCollection | undefined;
    on(name: string): ValidationError | undefined;
}
export declare class ValidationErrorCodes {
  static Address: {
    CannotBeBlank: string;
    CompanyIsInvalid: string;
    CompanyIsTooLong: string;
    CountryCodeAlpha3IsNotAccepted: string;
    CountryCodeNumericIsNotAccepted: string;
    CountryNameIsNotAccepted: string;
    ExtendedAddressIsInvalid: string;
    ExtendedAddressIsTooLong: string;
    FirstNameIsInvalid: string;
    FirstNameIsTooLong: string;
    InconsistentCountry: string;
    IsInvalid: string;
    LastNameIsInvalid: string;
    LastNameIsTooLong: string;
    LocalityIsInvalid: string;
    LocalityIsTooLong: string;
    PostalCodeInvalidCharacters: string;
    PostalCodeIsInvalid: string;
    PostalCodeIsRequired: string;
    PostalCodeIsTooLong: string;
    RegionIsInvalid: string;
    RegionIsTooLong: string;
    StateIsInvalidForSellerProtection: string;
    StreetAddressIsInvalid: string;
    StreetAddressIsRequired: string;
    StreetAddressIsTooLong: string;
    TooManyAddressesPerCustomer: string;
  };

  static ApplePayCard: {
    ApplePayCardsAreNotAccepted: string;
    CustomerIdIsRequiredForVaulting: string;
    TokenIsInUse: string;
    PaymentMethodNonceConsumed: string;
    PaymentMethodNonceUnknown: string;
    PaymentMethodNonceLocked: string;
    PaymentMethodNonceCardTypeIsNotAccepted: string;
    CannotUpdateApplePayCardUsingPaymentMethodNonce: string;
    NumberIsRequired: string;
    ExpirationMonthIsRequired: string;
    ExpirationYearIsRequired: string;
    CryptogramIsRequired: string;
    DecryptionFailed: string;
    Disabled: string;
    MerchantNotConfigured: string;
    MerchantKeysAlreadyConfigured: string;
    MerchantKeysNotConfigured: string;
    CertificateInvalid: string;
    CertificateMismatch: string;
    InvalidToken: string;
    PrivateKeyMismatch: string;
    KeyMismatchStoringCertificate: string;
  };

  static AuthorizationFingerprint: {
    InvalidCreatedAt: string;
    InvalidFormat: string;
    InvalidPublicKey: string;
    InvalidSignature: string;
    MissingFingerprint: string;
    OptionsNotAllowedWithoutCustomer: string;
    SignatureRevoked: string;
  };

  static ClientToken: {
    CustomerDoesNotExist: string;
    FailOnDuplicatePaymentMethodRequiresCustomerId: string;
    MakeDefaultRequiresCustomerId: string;
    ProxyMerchantDoesNotExist: string;
    VerifyCardRequiresCustomerId: string;
    MerchantAccountDoesNotExist: string;
    UnsupportedVersion: string;
  };

  static CreditCard: {
    BillingAddressConflict: string;
    BillingAddressFormatIsInvalid: string;
    BillingAddressIdIsInvalid: string;
    CannotUpdateCardUsingPaymentMethodNonce: string;
    CardholderNameIsTooLong: string;
    CreditCardTypeIsNotAccepted: string;
    CreditCardTypeIsNotAcceptedBySubscriptionMerchantAccount: string;
    CustomerIdIsInvalid: string;
    CustomerIdIsRequired: string;
    CvvIsInvalid: string;
    CvvIsRequired: string;
    CvvVerificationFailed: string;
    DuplicateCardExists: string;
    ExpirationDateConflict: string;
    ExpirationDateIsInvalid: string;
    ExpirationDateIsRequired: string;
    ExpirationDateYearIsInvalid: string;
    ExpirationMonthIsInvalid: string;
    ExpirationYearIsInvalid: string;
    InvalidParamsForCreditCardUpdate: string;
    InvalidVenmoSDKPaymentMethodCode: string;
    NumberHasInvalidLength: string;
    NumberIsInvalid: string;
    NumberIsProhibited: string;
    NumberIsRequired: string;
    NumberLengthIsInvalid: string;
    NumberMustBeTestNumber: string;
    PaymentMethodConflict: string;
    PaymentMethodIsNotACreditCard: string;
    PaymentMethodNonceCardTypeIsNotAccepted: string;
    PaymentMethodNonceConsumed: string;
    PaymentMethodNonceLocked: string;
    PaymentMethodNonceUnknown: string;
    PostalCodeVerificationFailed: string;
    TokenFormatIsInvalid: string;
    TokenInvalid: string;
    TokenIsInUse: string;
    TokenIsNotAllowed: string;
    TokenIsRequired: string;
    TokenIsTooLong: string;
    VenmoSDKPaymentMethodCodeCardTypeIsNotAccepted: string;
    VerificationNotSupportedOnThisMerchantAccount: string;
    Options: {
      UpdateExistingTokenIsInvalid: string;
      UpdateExistingTokenNotAllowed: string;
      VerificationAmountCannotBeNegative: string;
      VerificationAmountFormatIsInvalid: string;
      VerificationAmountIsTooLarge: string;
      VerificationAmountNotSupportedByProcessor: string;
      VerificationMerchantAccountIdIsInvalid: string;
      VerificationMerchantAccountIsForbidden: string;
      VerificationMerchantAccountIsSuspended: string;
      VerificationMerchantAccountCannotBeSubMerchantAccount: string;
    }
  };

  static Customer: {
    CompanyIsTooLong: string;
    CustomFieldIsInvalid: string;
    CustomFieldIsTooLong: string;
    EmailFormatIsInvalid: string;
    EmailIsRequired: string;
    EmailIsTooLong: string;
    FaxIsTooLong: string;
    FirstNameIsTooLong: string;
    IdIsInUse: string;
    IdIsInvalid: string;
    IdIsNotAllowed: string;
    IdIsRequired: string;
    IdIsTooLong: string;
    LastNameIsTooLong: string;
    PhoneIsTooLong: string;
    VaultedPaymentInstrumentNonceBelongsToDifferentCustomer: string;
    WebsiteFormatIsInvalid: string;
    WebsiteIsTooLong: string;
  };

  static Descriptor: {
    InternationalNameFormatIsInvalid: string;
    PhoneFormatIsInvalid: string;
    DynamicDescriptorsDisabled: string;
    NameFormatIsInvalid: string;
    InternationalPhoneFormatIsInvalid: string;
    UrlFormatIsInvalid: string;
  };

  static Merchant: {
    CountryCannotBeBlank: string;
    CountryCodeAlpha2IsInvalid: string;
    CountryCodeAlpha2IsNotAccepted: string;
    CountryCodeAlpha3IsInvalid: string;
    CountryCodeAlpha3IsNotAccepted: string;
    CountryCodeNumericIsInvalid: string;
    CountryCodeNumericIsNotAccepted: string;
    CountryNameIsInvalid: string;
    CountryNameIsNotAccepted: string;
    CurrenciesAreInvalid: string;
    EmailFormatIsInvalid: string;
    EmailIsRequired: string;
    InconsistentCountry: string;
    PaymentMethodsAreInvalid: string;
    PaymentMethodsAreNotAllowed: string;
  };

  static MerchantAccount: {
    ApplicantDetails: {
      AccountNumberIsInvalid: string;
      AccountNumberIsRequired: string;
      Address: {
        LocalityIsRequired: string;
        PostalCodeIsInvalid: string;
        PostalCodeIsRequired: string;
        RegionIsInvalid: string;
        RegionIsRequired: string;
        StreetAddressIsInvalid: string;
        StreetAddressIsRequired: string;
      },
      CompanyNameIsInvalid: string;
      CompanyNameIsRequiredWithTaxId: string;
      DateOfBirthIsInvalid: string;
      DateOfBirthIsRequired: string;
      Declined: string;
      DeclinedFailedKYC: string;
      DeclinedMasterCardMatch: string;
      DeclinedOFAC: string;
      DeclinedSsnInvalid: string;
      DeclinedSsnMatchesDeceased: string;
      EmailAddressIsInvalid: string;
      EmailAddressIsRequired: string;
      FirstNameIsInvalid: string;
      FirstNameIsRequired: string;
      LastNameIsInvalid: string;
      LastNameIsRequired: string;
      PhoneIsInvalid: string;
      RoutingNumberIsInvalid: string;
      RoutingNumberIsRequired: string;
      SsnIsInvalid: string;
      TaxIdIsInvalid: string;
      TaxIdIsRequiredWithCompanyName: string;
      TaxIdMustBeBlank: string;
    },
    Individual: {
      DateOfBirthIsInvalid: string;
      DateOfBirthIsRequired: string;
      EmailIsInvalid: string;
      EmailIsRequired: string;
      FirstNameIsInvalid: string;
      FirstNameIsRequired: string;
      LastNameIsInvalid: string;
      LastNameIsRequired: string;
      PhoneIsInvalid: string;
      SsnIsInvalid: string;
      Address: {
        StreetAddressIsRequired: string;
        LocalityIsRequired: string;
        PostalCodeIsRequired: string;
        RegionIsRequired: string;
        StreetAddressIsInvalid: string;
        PostalCodeIsInvalid: string;
        RegionIsInvalid: string;
      }
    },
    Business: {
      DbaNameIsInvalid: string;
      LegalNameIsInvalid: string;
      LegalNameIsRequiredWithTaxId: string;
      TaxIdIsInvalid: string;
      TaxIdIsRequiredWithLegalName: string;
      TaxIdMustBeBlank: string;
      Address: {
        StreetAddressIsInvalid: string;
        PostalCodeIsInvalid: string;
        RegionIsInvalid: string;
      }
    },
    Funding: {
      AccountNumberIsInvalid: string;
      AccountNumberIsRequired: string;
      DestinationIsInvalid: string;
      DestinationIsRequired: string;
      EmailIsInvalid: string;
      EmailIsRequired: string;
      MobilePhoneIsInvalid: string;
      MobilePhoneIsRequired: string;
      RoutingNumberIsInvalid: string;
      RoutingNumberIsRequired: string;
    },
    CannotBeUpdated: string;
    IdCannotBeUpdated: string;
    IdFormatIsInvalid: string;
    IdIsInUse: string;
    IdIsNotAllowed: string;
    IdIsTooLong: string;
    MasterMerchantAccountIdCannotBeUpdated: string;
    MasterMerchantAccountIdIsInvalid: string;
    MasterMerchantAccountIdIsRequired: string;
    MasterMerchantAccountMustBeActive: string;
    TosAcceptedIsRequired: string;
  };

  static OAuth: {
    InvalidGrant: string;
    InvalidCredentials: string;
    InvalidScope: string;
    InvalidRequest: string;
    UnsupportedGrantType: string;
  };

  static PaymentMethod: {
    CannotForwardPaymentMethodType: string;
    CustomerIdIsInvalid: string;
    CustomerIdIsRequired: string;
    NonceIsInvalid: string;
    NonceIsRequired: string;
    PaymentMethodParamsAreRequired: string;
    PaymentMethodNonceConsumed: string;
    PaymentMethodNonceUnknown: string;
    PaymentMethodNonceLocked: string;
  };

  static PayPalAccount: {
    AuthExpired: string;
    CannotHaveBothAccessTokenAndConsentCode: string;
    CannotHaveFundingSourceWithoutAccessToken: string;
    CannotUpdatePayPalAccountUsingPaymentMethodNonce: string;
    CannotVaultOneTimeUsePayPalAccount: string;
    ConsentCodeOrAccessTokenIsRequired: string;
    CustomerIdIsRequiredForVaulting: string;
    InvalidFundingSourceSelection: string;
    InvalidParamsForPayPalAccountUpdate: string;
    PayPalAccountsAreNotAccepted: string;
    PayPalCommunicationError: string;
    PaymentMethodNonceConsumed: string;
    PaymentMethodNonceLocked: string;
    PaymentMethodNonceUnknown: string;
    TokenIsInUse: string;
  };

  static SEPABankAccount: {
    IBANIsRequired: string;
    BICIsRequired: string;
    AccountHolderNameIsRequired: string;
  };

  static SEPAMandate: {
    AccountHolderNameIsRequired: string;
    BICIsRequired: string;
    IBANIsRequired: string;
    TypeIsRequired: string;
    IBANInvalidCharacter: string;
    BICInvalidCharacter: string;
    BICLengthIsInvalid: string;
    BICUnsupportedCountry: string;
    IBANUnsupportedCountry: string;
    IBANInvalidFormat: string;
    BillingAddressConflict: string;
    BillingAddressIdIsInvalid: string;
    TypeIsInvalid: string;
  };

  static SettlementBatchSummary: {
    SettlementDateIsInvalid: string;
    SettlementDateIsRequired: string;
    CustomFieldIsInvalid: string;
  };

  static Subscription: {
    BillingDayOfMonthCannotBeUpdated: string;
    BillingDayOfMonthIsInvalid: string;
    BillingDayOfMonthMustBeNumeric: string;
    CannotAddDuplicateAddonOrDiscount: string;
    CannotEditCanceledSubscription: string;
    CannotEditExpiredSubscription: string;
    CannotEditPriceChangingFieldsOnPastDueSubscription: string;
    FirstBillingDateCannotBeInThePast: string;
    FirstBillingDateCannotBeUpdated: string;
    FirstBillingDateIsInvalid: string;
    IdIsInUse: string;
    InconsistentNumberOfBillingCycles: string;
    InconsistentStartDate: string;
    InvalidRequestFormat: string;
    MerchantAccountDoesNotSupportInstrumentType: string;
    MerchantAccountIdIsInvalid: string;
    MismatchCurrencyISOCode: string;
    NumberOfBillingCyclesCannotBeBlank: string;
    NumberOfBillingCyclesIsTooSmall: string;
    NumberOfBillingCyclesMustBeGreaterThanZero: string;
    NumberOfBillingCyclesMustBeNumeric: string;
    PaymentMethodNonceCardTypeIsNotAccepted: string;
    PaymentMethodNonceInstrumentTypeDoesNotSupportSubscriptions: string;
    PaymentMethodNonceIsInvalid: string;
    PaymentMethodNonceNotAssociatedWithCustomer: string;
    PaymentMethodNonceUnvaultedCardIsNotAccepted: string;
    PaymentMethodTokenCardTypeIsNotAccepted: string;
    PaymentMethodTokenInstrumentTypeDoesNotSupportSubscriptions: string;
    PaymentMethodTokenIsInvalid: string;
    PaymentMethodTokenNotAssociatedWithCustomer: string;
    PlanBillingFrequencyCannotBeUpdated: string;
    PlanIdIsInvalid: string;
    PriceCannotBeBlank: string;
    PriceFormatIsInvalid: string;
    PriceIsTooLarge: string;
    StatusIsCanceled: string;
    TokenFormatIsInvalid: string;
    TrialDurationFormatIsInvalid: string;
    TrialDurationIsRequired: string;
    TrialDurationUnitIsInvalid: string;
    Modification: {
      AmountCannotBeBlank: string;
      AmountIsInvalid: string;
      AmountIsTooLarge: string;
      CannotEditModificationsOnPastDueSubscription: string;
      CannotUpdateAndRemove: string;
      ExistingIdIsIncorrectKind: string;
      ExistingIdIsInvalid: string;
      ExistingIdIsRequired: string;
      IdToRemoveIsIncorrectKind: string;
      IdToRemoveIsInvalid: string;
      IdToRemoveIsNotPresent: string;
      InconsistentNumberOfBillingCycles: string;
      InheritedFromIdIsInvalid: string;
      InheritedFromIdIsRequired: string;
      Missing: string;
      NumberOfBillingCyclesCannotBeBlank: string;
      NumberOfBillingCyclesIsInvalid: string;
      NumberOfBillingCyclesMustBeGreaterThanZero: string;
      QuantityCannotBeBlank: string;
      QuantityIsInvalid: string;
      QuantityMustBeGreaterThanZero: string;
    }
  };

  static Transaction: {
    AmountCannotBeNegative: string;
    AmountDoesNotMatch3DSecureAmount: string;
    AmountFormatIsInvalid: string;
    AmountIsRequired: string;
    AmountIsTooLarge: string;
    AmountMustBeGreaterThanZero: string;
    BillingAddressConflict: string;
    CannotBeVoided: string;
    CannotCancelRelease: string;
    CannotCloneCredit: string;
    CannotCloneMarketplaceTransaction: string;
    CannotCloneTransactionWithPayPalAccount: string;
    CannotCloneTransactionWithVaultCreditCard: string;
    CannotCloneUnsuccessfulTransaction: string;
    CannotCloneVoiceAuthorizations: string;
    CannotHoldInEscrow: string;
    CannotPartiallyRefundEscrowedTransaction: string;
    CannotRefundCredit: string;
    CannotRefundSettlingTransaction: string;
    CannotRefundUnlessSettled: string;
    CannotRefundWithPendingMerchantAccount: string;
    CannotRefundWithSuspendedMerchantAccount: string;
    CannotReleaseFromEscrow: string;
    CannotSimulateSettlement: string;
    CannotSubmitForPartialSettlement: string;
    CannotSubmitForSettlement: string;
    CannotUpdateTransactionDetailsNotSubmittedForSettlement: string,
    ChannelIsTooLong: string;
    CreditCardIsRequired: string;
    CustomFieldIsInvalid: string;
    CustomFieldIsTooLong: string;
    CustomerDefaultPaymentMethodCardTypeIsNotAccepted: string;
    CustomerDoesNotHaveCreditCard: string;
    CustomerIdIsInvalid: string;
    HasAlreadyBeenRefunded: string;
    MerchantAccountDoesNotMatch3DSecureMerchantAccount: string;
    MerchantAccountDoesNotSupportMOTO: string;
    MerchantAccountDoesNotSupportRefunds: string;
    MerchantAccountIdIsInvalid: string;
    MerchantAccountIsSuspended: string;
    Options: {
      PayPal: {
        CustomFieldTooLong: string;
      },
      SubmitForSettlementIsRequiredForCloning: string;
      SubmitForSettlementIsRequiredForPayPalUnilateral: string;
      UseBillingForShippingDisabled: string;
      VaultIsDisabled: string;
    },
    OrderIdIsTooLong: string;
    PayPalAuthExpired: string;
    PayPalNotEnabled: string;
    PayPalVaultRecordMissingData: string;
    PaymentInstrumentNotSupportedByMerchantAccount: string;
    PaymentInstrumentTypeIsNotAccepted: string;
    PaymentMethodConflict: string;
    PaymentMethodConflictWithVenmoSDK: string;
    PaymentMethodDoesNotBelongToCustomer: string;
    PaymentMethodDoesNotBelongToSubscription: string;
    PaymentMethodNonceCardTypeIsNotAccepted: string;
    PaymentMethodNonceConsumed: string;
    PaymentMethodNonceHasNoValidPaymentInstrumentType: string;
    PaymentMethodNonceLocked: string;
    PaymentMethodNonceUnknown: string;
    PaymentMethodTokenCardTypeIsNotAccepted: string;
    PaymentMethodTokenIsInvalid: string;
    ProcessorAuthorizationCodeCannotBeSet: string;
    ProcessorAuthorizationCodeIsInvalid: string;
    ProcessorDoesNotSupportAuths: string;
    ProcessorDoesNotSupportCredits: string;
    ProcessorDoesNotSupportPartialSettlement: string;
    ProcessorDoesNotSupportUpdatingOrderId: string;
    ProcessorDoesNotSupportUpdatingDescriptor: string;
    ProcessorDoesNotSupportUpdatingTransactionDetails: string;
    ProcessorDoesNotSupportVoiceAuthorizations: string;
    PurchaseOrderNumberIsInvalid: string;
    PurchaseOrderNumberIsTooLong: string;
    RefundAmountIsTooLarge: string;
    ServiceFeeAmountCannotBeNegative: string;
    ServiceFeeAmountFormatIsInvalid: string;
    ServiceFeeAmountIsTooLarge: string;
    ServiceFeeAmountNotAllowedOnMasterMerchantAccount: string;
    ServiceFeeIsNotAllowedOnCredits: string;
    ServiceFeeNotAcceptedForPayPal: string;
    SettlementAmountIsLessThanServiceFeeAmount: string;
    SettlementAmountIsTooLarge: string;
    ShippingAddressDoesntMatchCustomer: string;
    SubMerchantAccountRequiresServiceFeeAmount: string;
    SubscriptionDoesNotBelongToCustomer: string;
    SubscriptionIdIsInvalid: string;
    SubscriptionStatusMustBePastDue: string;
    TaxAmountCannotBeNegative: string;
    TaxAmountFormatIsInvalid: string;
    TaxAmountIsTooLarge: string;
    ThreeDSecureAuthenticationFailed: string;
    ThreeDSecureTokenIsInvalid: string;
    ThreeDSecureTransactionDataDoesntMatchVerify: string;
    ThreeDSecureEciFlagIsRequired: string;
    ThreeDSecureCavvIsRequired: string;
    ThreeDSecureXidIsRequired: string;
    ThreeDSecureEciFlagIsInvalid: string;
    ThreeDSecureMerchantAccountDoesNotSupportCardType: string;
    TransactionSettlementAmountIsLessThanServiceFeeAmount: string;
    TypeIsInvalid: string;
    TypeIsRequired: string;
    UnsupportedVoiceAuthorization: string;
    IndustryData: {
      IndustryTypeIsInvalid: string;
      Lodging: {
        EmptyData: string;
        FolioNumberIsInvalid: string;
        CheckInDateIsInvalid: string;
        CheckOutDateIsInvalid: string;
        CheckOutDateMustFollowCheckInDate: string;
        UnknownDataField: string;
      },
      TravelCruise: {
        EmptyData: string;
        UnknownDataField: string;
        TravelPackageIsInvalid: string;
        DepartureDateIsInvalid: string;
        CheckInDateIsInvalid: string;
        CheckOutDateIsInvalid: string;
      }
    }
  };

  static Verification: {
    Options: {
      AmountCannotBeNegative: string;
      AmountFormatIsInvalid: string;
      AmountIsTooLarge: string;
      AmountNotSupportedByProcessor: string;
      MerchantAccountIdIsInvalid: string;
      MerchantAccountIsSuspended: string;
      MerchantAccountIsForbidden: string;
      MerchantAccountCannotBeSubMerchantAccount: string;
    }
  };
}
export interface SearchResponse<T> {
    fatalError?: ErrorResponse | Exception;
    length(): number;
    ids: string[];
    pageSize: number;
    ready: boolean;
    success: true;
    /** Not entirely sure about the response here */
    first(callback: any): void;
    /** Not entirely sure about the response here */
    each(callback: any): void;
}

// AddOn
declare interface AddOnGateway {
    /**
     * AddOn.all()
     * @param callback Callback with addOns
     */
    all(callback: ResponseCallback<{ addOns: AddOn[] }>): void;
}
export declare interface AddOn {
    /** The add-on amount. */
    amount: string;
    /** The add-on's current billing cycle. It is incremented each time the add-on is successfully applied. Its value will always be null for add-ons that are not attached to a subscription. */
    currentBillingCycle: number;
    /** A description of the add-on. Its value will always be null for add-ons that are attached to a subscription. */
    description: string;
    /** The add-on identifier. Length and format of gateway-generated tokens and IDs may change at any time. */
    id: string;
    /** The value that defines whether the modification being applied to a plan or subscription is an add-on or a discount. Its value will always be null for add-ons that are attached to a subscription. */
    kind: string;
    /** The name of the add-on. */
    name: string;
    /** A value indicating whether an add-on's billing cycle is set to never expire instead of running for a specific number of billing cycles. */
    neverExpires: boolean;
    /** Specifies the number of billing cycles of the add-on. */
    numberOfBillingCycles: number;
    /** The number of times this particular add-on is applied to the subscription. Its value will always be null for add-ons that are not attached to a subscription. */
    quantity: number | null;
}

// Address
declare interface AddressGateway {
    /**
     * Address.create()
     * @param address Customer address to create
     * @param callback Callback with response
     */
    create(address: CreateAddress, callback: ResponseCallback<{ address: Address }>): void;
    /**
     * Address.delete()
     * @param customerId A string value representing an existing customer in your Vault.
     * @param addressId The two-letter value for an address associated with a specific customer ID. The maximum number of addresses per customer is 50.
     * @param callback Callback with error only
     */
    delete(customerId: string, addressId: string, callback: ErrorOnlyCallback): void;
    /**
     * Address.find()
     * @param customerId A string value representing an existing customer in your Vault.
     * @param addressId The two-letter value for an address associated with a specific customer ID. The maximum number of addresses per customer is 50.
     * @param callback Callback with address
     */
    find(customerId: string, addressId: string, callback: ObjectCallback<Address>): void;
    /**
     * Address.update()
     * @param customerId A string value representing an existing customer in your Vault.
     * @param addressId The two-letter value for an address associated with a specific customer ID. The maximum number of addresses per customer is 50.
     * @param address Customer address to update
     * @param callback Callback with response
     */
    update(customerId: string, addressId: string, address: UpdateAddress, callback: ResponseCallback<{ address: Address }>): void;
}
export declare interface Address {
    /** Company name. */
    company: string;
    /** The ISO 3166-1 alpha-2 country code specified in an address. The gateway only uses specific alpha-2 values. */
    countryCodeAlpha2: string;
    /** The ISO 3166-1 alpha-3 country code specified in an address. The gateway only uses specific alpha-3 values. */
    countryCodeAlpha3: string;
    /** The ISO 3166-1 numeric country code specified in an address. The gateway only uses specific numeric values. */
    countryCodeNumeric: string;
    /** The country name specified in an address. Braintree only uses specific country names. */
    countryName: string;
    /** The date/time the object was created. */
    createdAt: Date;
    /** A string value representing an existing customer in your Vault that owns this address. Use this to find the customer. */
    customerId: string;
    /** The extended address information—such as apartment or suite number. */
    extendedAddress: string;
    /** The first name. */
    firstName: string;
    /** The two-letter value for an address associated with a specific customer ID. The maximum number of addresses per customer is 50. */
    id: string;
    /** The last name. */
    lastName: string;
    /** The locality/city. */
    locality: string;
    /** The postal code. */
    postalCode: string;
    /** The state or province. */
    region: string;
    /** The street address. */
    streetAddress: string;
    /** The date/time the object was last updated. */
    updatedAt: Date;
}
export declare interface CreateAddress {
    /** Company name. 255 character maximum. */
    company?: string;
    /** The ISO 3166-1 alpha-2 country code specified in an address. The gateway only accepts specific alpha-2 values. */
    countryCodeAlpha2?: string;
    /** The ISO 3166-1 alpha-3 country code specified in an address. The gateway only accepts specific alpha-3 values. */
    countryCodeAlpha3?: string;
    /** The ISO 3166-1 numeric country code specified in an address. The gateway only accepts specific numeric values. */
    countryCodeNumeric?: string;
    /** The country name specified in an address. Braintree only accepts specific country names. */
    countryName?: string;
    /** A string value representing an existing customer in your Vault that you want to create an address for. */
    customerId: string;
    /** The extended address information—such as apartment or suite number. 255 character maximum. */
    extendedAddress?: string;
    /** The first name. The first name value must be less than or equal to 255 characters. */
    firstName?: string;
    /** The last name. The last name value must be less than or equal to 255 characters. */
    lastName?: string;
    /** The locality/city. 255 character maximum. */
    locality?: string;
    /** The postal code. Postal code must be a string of 5-9 alphanumeric characters, optionally separated by a dash or a space. Spaces, hyphens, and all other special characters are ignored. */
    postalCode?: string;
    /** The state or province. For PayPal addresses, the region must meet PayPal's state restrictions; for all other payment methods, it must be less than or equal to 255 characters. */
    region?: string;
    /** The street address. 255 character maximum. Required when used to create payment methods or transactions that perform verification when AVS rules are configured to require street address. */
    streetAddress?: string;
}
export declare interface UpdateAddress {
    /** Company name. 255 character maximum. */
    company?: string;
    /** The ISO 3166-1 alpha-2 country code specified in an address. The gateway only accepts specific alpha-2 values. */
    countryCodeAlpha2?: string;
    /** The ISO 3166-1 alpha-3 country code specified in an address. The gateway only accepts specific alpha-3 values. */
    countryCodeAlpha3?: string;
    /** The ISO 3166-1 numeric country code specified in an address. The gateway only accepts specific numeric values. */
    countryCodeNumeric?: string;
    /** The country name specified in an address. Braintree only accepts specific country names. */
    countryName?: string;
    /** The extended address information—such as apartment or suite number. 255 character maximum. */
    extendedAddress?: string;
    /** The first name. The first name value must be less than or equal to 255 characters. */
    firstName?: string;
    /** The last name. The last name value must be less than or equal to 255 characters. */
    lastName?: string;
    /** The locality/city. 255 character maximum. */
    locality?: string;
    /** The postal code. Postal code must be a string of 5-9 alphanumeric characters, optionally separated by a dash or a space. Spaces, hyphens, and all other special characters are ignored. */
    postalCode?: string;
    /** The state or province. For PayPal addresses, the region must meet PayPal's state restrictions; for all other payment methods, it must be less than or equal to 255 characters. */
    region?: string;
    /** The street address. 255 character maximum. Required when used to create payment methods or transactions that perform verification when AVS rules are configured to require street address. */
    streetAddress?: string;
}

// ClientToken
declare interface ClientTokenGateway {
    /**
     * ClientToken.generate()
     * @param options Generation options
     * @param callback Callback with response
     */
    generate(options: GenerateClientToken, callback: ResponseCallback<{ clientToken: string }>): void;
}
export declare interface GenerateClientToken {
    /** A string value representing an existing customer in your Vault. Displays the customer's saved payment methods in the Drop-in UI and automatically adds newly-entered credit cards to the customer in your Vault. */
    customerId?: string;
    /** Specify the merchant account ID that you want to use to generate the client token. If no merchant account ID is specified, we will use your default merchant account. */
    merchantAccountId?: string;
    /** Additional options */
    options?: {
        /** If this option is passed and the payment method has already been added to the Vault, the request will fail. This can only be passed if a customer_id is passed as well. If the check fails, this option will stop the Drop-in from returning a payment_method_nonce. */
        failOnDuplicatePaymentMethod?: boolean;
        /** This option makes the specified payment method the default for the customer. This can only be passed if a customer_id is passed as well. */
        makeDefault?: boolean;
        /** If the payment method is a credit card, this option prompts the gateway to verify the card's number and expiration date. It also verifies the AVS and CVV information if you've enabled AVS and CVV rules. This option can only be passed if a customerId is passed as well. If the verification fails, this option will stop the Drop-in from returning a paymentMethodNonce. */
        verifyCard?: boolean;
        /** The version of the client token to generate. The default value is 2. Current supported versions are 1, 2, and 3. Please check your client-side SDKs in use before changing this value. */
        version?: "1" | "2" | "3";
    };
}

// CreditCard
declare interface CreditCardGateway {
    /**
     * CreditCard.create()
     * @param options Generation options
     * @param callback Callback with response
     */
    create(options: CreateCreditCard, callback: ResponseCallback<{ creditCard: CreditCard }>): void;
    /**
     * CreditCard.delete()
     * @param token An alphanumeric value that references a specific payment method stored in your Vault.
     * @param callback Callback with error only
     */
    delete(token: string, callback: ErrorOnlyCallback): void;
    /**
     * CreditCard.expiringBetween()
     * @param startDate The minimum expiration date of cards returned in the search (inclusive).
     * @param endDate The maximum expiration date of cards returned in the search (inclusive).
     * @param callback Callback with search results
     */
    expiringBetween(startDate: Date, endDate: Date, callback: SearchResponseCallback<CreditCard>): void;
    /**
     * CreditCard.expired()
     * @param callback Callback with search results
     */
    expired(callback: SearchResponseCallback<CreditCard>): void;
    /**
     * CreditCard.find()
     * @param token An alphanumeric value that references a specific payment method stored in your Vault.
     * @param callback Callback with credit card
     */
    find(token: string, callback: ObjectCallback<CreditCard>): void;
    /**
     * CreditCard.fromNonce()
     * @param nonce The nonce
     * @param callback Callback with credit card
     */
    fromNonce(token: string, callback: ObjectCallback<CreditCard>): void;
    /**
     * CreditCard.update()
     * @param token An alphanumeric value that references a specific payment method stored in your Vault.
     * @param attributes Card attributes to update
     * @param callback Callback with response
     */
    update(token: string, attributes: UpdateCreditCard, callback: ResponseCallback<{ address: CreditCard }>): void;
    /**
     * Format a date in MM/YYY format
     * @param date The date object
     */
    dateFormat(date: Date): string;
}
declare interface YesNoUnknown {
    Yes: string;
    No: string;
    Unknown: string;
}
export declare class CreditCard {
    static CardType: {
        AmEx: string;
        CarteBlanche: string;
        ChinaUnionPay: string;
        DinersClubInternational: string;
        Discover: string;
        JCB: string;
        Laser: string;
        Maestro: string;
        MasterCard: string;
        Solo: string;
        Switch: string;
        Visa: string;
        Unknown: string;
        All(): string[];
    };
    static CustomerLocation: {
      International: string;
      US: string;
    };
    static Prepaid: YesNoUnknown;
    static Commercial: YesNoUnknown;
    static Payroll: YesNoUnknown;
    static Healthcare: YesNoUnknown;
    static DurbinRegulated: YesNoUnknown;
    static Debit: YesNoUnknown;
    static CountryOfIssuance: YesNoUnknown;
    static IssuingBank: YesNoUnknown;
    static ProductId: YesNoUnknown;
    static CardTypeIndicator: YesNoUnknown;

    billingAddress: Address; /** The billing Address associated with this credit card. */
    bin: string; /** The first 6 digits of the credit card, known as the Bank Identification Number. */
    cardType: string; /** The type of the credit card. */
    cardholderName: string; /** The cardholder name associated with the credit card. */
    commercial: string; /** Whether the card type is a commercial card and is capable of processing Level 2 transactions. */
    countryOfIssuance: string; /** The country that issued the credit card. Possible country values follow ISO 3166-1. */
    createdAt: Date; /** The date/time the object was created. */
    customerId: string; /** A string value representing an existing customer in your Vault that owns this payment method. Use this to find the customer. */
    customerLocation: string; /** Location of the customer. */
    debit: string; /** Whether the card is a debit card. */
    default: boolean; /** Whether the card is the default for the customer. */
    durbinRegulated: string; /** A value indicating whether the issuing bank's card range is regulated by the Durbin Amendment due to the bank's assets. */
    expirationDate: string; /** The expiration date, formatted MMYY or MMYYYY. May be used instead of expiration_month and expiration_year. */
    expirationMonth: string; /** The expiration month of a credit card, formatted MM. May be used with expiration_year, and instead of expiration_date. */
    expirationYear: string; /** The two or four digit year associated with a credit card, formatted YYYY or YY. May be used with expiration_month, and instead of expiration_date. */
    expired: boolean; /** Whether the card is expired. */
    healthcare: string; /** Whether the card is a healthcare card. */
    imageUrl: string; /** A URL that points to a payment method image resource (a PNG file) hosted by Braintree. */
    issuingBank: string; /** The bank that issued the credit card. */
    last4: string; /** The last 4 digits of the credit card number. */
    maskedNumber: string; /** A value comprised of the bank identification number (BIN), 6 asterisks blocking out the middle numbers (regardless of the number of digits present), and the last 4 digits of the card number. This complies with PCI security standards. */
    payroll: string; /** Whether the card is a payroll card. */
    prepaid: string; /** Whether the card is a prepaid card. */
    productId: string; /** The code for the product type of the card (e.g. D (Visa Signature Preferred), G (Visa Business)). See Product ID codes below for possible values. */
    subscriptions: Subscription[]; /** Subscriptions associated with the payment method, sorted by creation date with the most recent last. */
    token: string; /** An alphanumeric value that references a specific payment method stored in your Vault. */
    uniqueNumberIdentifier: string; /** A randomly-generated string that uniquely identifies a credit card number in the Vault. If the same credit card is added to a merchant's Vault multiple times, each Vault entry will have the same unique identifier. This value is randomly generated by merchant gateway account, so it will be different for each merchant's Vault. */
    updatedAt: Date; /** The date/time the object was last updated. */
    verification?: CreditCardVerification;
}
export declare interface CreateCreditCard {
    /** A billing address associated with a specific customer ID. It can be further associated with a specific payment method. The maximum number of addresses per customer is 50. */
    billingAddress?: {
        /** Company name. 255 character maximum. */
        company?: string;
        /** The ISO 3166-1 alpha-2 country code specified in an address. The gateway only accepts specific alpha-2 values. */
        countryCodeAlpha2?: string;
        /** The ISO 3166-1 alpha-3 country code specified in an address. The gateway only accepts specific alpha-3 values. */
        countryCodeAlpha3?: string;
        /** The ISO 3166-1 numeric country code specified in an address. The gateway only accepts specific numeric values. */
        countryCodeNumeric?: string;
        /** The country name specified in an address. Braintree only accepts specific country names. */
        countryName?: string;
        /** The extended address information—such as apartment or suite number. 255 character maximum. */
        extendedAddress?: string;
        /** The first name. 255 character maximum. */
        firstName?: string;
        /** The last name. 255 character maximum. */
        lastName?: string;
        /** The locality/city. 255 character maximum. */
        locality?: string;
        /** The postal code. Postal code must be a string of 5-9 alphanumeric characters, optionally separated by a dash or a space. Spaces, hyphens, and all other special characters are ignored. */
        postalCode?: string;
        /** The state or province. 255 character maximum. */
        region?: string;
        /** The billing street address. 255 character maximum. Required to perform card verification when AVS rules are configured to require street address. */
        streetAddress?: string;
    };
    /** The two-letter value for an address associated with a specific customer ID. The maximum number of addresses per customer is 50. */
    billingAddressId?: string;
    /** The cardholder name associated with the credit card. 175 character maximum. */
    cardholderName?: string;
    /** A string value representing an existing customer in your Vault that you want to add a credit card for. */
    customerId: string;
    /** A 3 or 4 digit card verification value assigned to credit cards. The CVV will never be stored in the gateway, but it can be provided with one-time requests to verify the card. */
    cvv?: string;
    /** The expiration date, formatted MM/YY or MM/YYYY. May be used instead of expirationMonth and expirationYear. */
    expirationDate?: string;
    /** The expiration month of a credit card, formatted MM. May be used with expirationYear, and instead of expirationDate. */
    expirationMonth?: string;
    /** The two or four digit year associated with a credit card, formatted YYYY or YY. May be used with expirationMonth, and instead of expirationDate. */
    expirationYear?: string;
    /** The 12-19 digit value consisting of a bank identification number (BIN) and primary account number (PAN). Passing the number directly (rather than passing a nonce) should only be done in a PCI compliant environment. If in doubt, use paymentMethodNonce with paymentMethod.create() */
    number?: string;
    /** Optional values that can be passed with a request. */
    options?: {
        /** If this option is passed and the payment method has already been added to the Vault, the request will fail. */
        failOnDuplicatePaymentMethod?: boolean;
        /** This option makes the specified payment method the default for the customer. */
        makeDefault?: boolean;
        /** Specify a non-negative amount that you want to use to verify a card. If you do not pass this option, the gateway will automatically use a verification amount of $0 or $1, depending on the processor and/or card type. */
        verificationAmount?: string;
        /** Specify the merchant account ID that you want to use to verify a card. See the merchantAccountId on transaction.sale() to learn more. The merchant account cannot be a marketplace sub-merchant account. See the Braintree Marketplace Guide to learn more. */
        verificationMerchantAccountId?: string;
        /** This option prompts the gateway to verify the card's number and expiration date. It also verifies the AVS and CVV information if you've enabled AVS and CVV rules. If you want to verify all cards before they are stored in your Vault, you can turn on card verification for your entire Braintree account in the Control Panel. */
        verifyCard?: boolean;
    };
    /** One-time-use token that references a payment method provided by your customer, such as a credit card or PayPal account. */
    paymentMethodNonce?: string;
    /** Customer request information. Sent to processor to help verify transaction integrity. */
    riskData?: {
        /** The User Agent field provided by the customer. 255 characters maximum. */
        customerBrowser?: string;
        /** The customer's IP address. */
        customerIp?: string;
    };
    /** An alphanumeric value that references a specific payment method stored in your Vault. Must be less than or equal to 36 characters. If using a custom integration, you can specify what you want the token to be. If not specified, the gateway will generate one that can be accessed on the result. If using our Drop-in UI, you cannot specify your own token. Length and format of gateway-generated tokens and IDs may change at any time. */
    token?: string;
}
export declare interface UpdateCreditCard {

    /** A billing address associated with a specific customer ID. It can be further associated with a specific payment method. The maximum number of addresses per customer is 50. */
    billingAddress?: {
        /** Company name. 255 character maximum. */
        company?: string;
        /** The ISO 3166-1 alpha-2 country code specified in an address. The gateway only accepts specific alpha-2 values. */
        countryCodeAlpha2?: string;
        /** The ISO 3166-1 alpha-3 country code specified in an address. The gateway only accepts specific alpha-3 values. */
        countryCodeAlpha3?: string;
        /** The ISO 3166-1 numeric country code specified in an address. The gateway only accepts specific numeric values. */
        countryCodeNumeric?: string;
        /** The country name specified in an address. Braintree only accepts specific country names. */
        countryName?: string;
        /** The extended address information—such as apartment or suite number. 255 character maximum. */
        extendedAddress?: string;
        /** The first name. 255 character maximum. */
        firstName?: string;
        /** The last name. 255 character maximum. */
        lastName?: string;
        /** The locality/city. 255 character maximum. */
        locality?: string;
        /** The postal code. Postal code must be a string of 5-9 alphanumeric characters, optionally separated by a dash or a space. Spaces, hyphens, and all other special characters are ignored. */
        postalCode?: string;
        /** The state or province. 255 character maximum. */
        region?: string;
        /** The billing street address. 255 character maximum. Required to perform card verification when AVS rules are configured to require street address. */
        streetAddress?: string;
        /** Optional values that can be passed with a request. */
        options?: {
            /** Update the billing address associated with the payment method token specified. Other payment methods associated with the same billing address will have their addresses updated, as well. */
            updateExisting?: boolean;
        }
    };
    /** The cardholder name associated with the credit card. 175 character maximum. */
    cardholderName?: string;
    /** The expiration date, formatted MM/YY or MM/YYYY. May be used instead of expirationMonth and expirationYear. */
    expirationDate?: string;
    /** The expiration month of a credit card, formatted MM. May be used with expirationYear, and instead of expirationDate. */
    expirationMonth?: string;
    /** The two or four digit year associated with a credit card, formatted YYYY or YY. May be used with expirationMonth, and instead of expirationDate. */
    expirationYear?: string;
    /** The 12-19 digit value consisting of a bank identification number (BIN) and primary account number (PAN). Passing the number directly (rather than passing a nonce) should only be done in a PCI compliant environment. If in doubt, use paymentMethodNonce with paymentMethod.create() */
    number?: string;
    /** Optional values that can be passed with a request. */
    options?: {
        /** If this option is passed and the payment method has already been added to the Vault, the request will fail. */
        failOnDuplicatePaymentMethod?: boolean;
        /** This option makes the specified payment method the default for the customer. */
        makeDefault?: boolean;
        /** Specify a non-negative amount that you want to use to verify a card. If you do not pass this option, the gateway will automatically use a verification amount of $0 or $1, depending on the processor and/or card type. */
        verificationAmount?: string;
        /** Specify the merchant account ID that you want to use to verify a card. See the merchantAccountId on transaction.sale() to learn more. The merchant account cannot be a marketplace sub-merchant account. See the Braintree Marketplace Guide to learn more. */
        verificationMerchantAccountId?: string;
        /** This option prompts the gateway to verify the card's number and expiration date. It also verifies the AVS and CVV information if you've enabled AVS and CVV rules. If you want to verify all cards before they are stored in your Vault, you can turn on card verification for your entire Braintree account in the Control Panel. */
        verifyCard?: boolean;
    };
    /** Customer request information. Sent to processor to help verify transaction integrity. */
    riskData?: {
        /** The User Agent field provided by the customer. 255 characters maximum. */
        customerBrowser?: string;
        /** The customer's IP address. */
        customerIp?: string;
    };
}

// Transaction
export declare class TransactionGateway {
    constructor(gateway: BraintreeGateway);
    cancelRelease(transactionId: string, callback: ResponseCallback<{}>): void;
    cloneTransaction(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    create(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    credit(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    find(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    holdInEscrow(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    refund(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    sale(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    // search(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    releaseFromEscrow(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    submitForSettlement(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    updateDetails(transactionId: string, callback: ResponseCallback<{}>): void;
    submitForPartialSettlement(transactionId: string, callback: ResponseCallback<{}>): void;
    void(transactionId: string, callback: ResponseCallback<{ transaction: Transaction }>): void;
    updateDetails(transactionId: string, callback: ResponseCallback<{}>): void;
}
export declare class Transaction {
    static CreatedUsing: {
        FullInformation: string;
        Token: string;
    };
    static EscrowStatus: {
        HoldPending: string;
        Held: string;
        ReleasePending: string;
        Released: string;
        Refunded: string;
    };
    static Source: {
        Api: string;
        ControlPanel: string;
        Recurring: string;
    };
    static Type: {
        Credit: string;
        Sale: string;
        All(): string[];
    };
    static GatewayRejectionReason: {
        ApplicationIncomplete: string;
        Avs: string;
        Cvv: string;
        AvsAndCvv: string;
        Duplicate: string;
        Fraud: string;
        ThreeDSecure: string;
    };
    static IndustryData: {
        Lodging: string;
        TravelAndCruise: string;
    };
    static Status: {
        AuthorizationExpired: string;
        Authorizing: string;
        Authorized: string;
        GatewayRejected: string;
        Failed: string;
        ProcessorDeclined: string;
        Settled: string;
        Settling: string;
        SettlementConfirmed: string;
        SettlementDeclined: string;
        SettlementPending: string;
        SubmittedForSettlement: string;
        Voided: string;
        All(): string;
    };
    constructor(attributes: any);

    additionalProcessorResponse?: string;
    amount: string;

    creditCard: CreditCard;
    paypalAccount: PayPalAccount;
    coinbaseAccount: CoinbaseAccount;
    applePayCard: ApplePayCard;
    androidPayCard: AndroidPayCard;
    disbursementDetails: DisbursementDetails;
    disputes?: Dispute[];
    facilitatorDetails?: FacilitatorDetails;
    riskData?: RiskData;
    threeDSecureInfo?: ThreeDSecureInfo;
    usBankAccount?: UsBankAccount;
    isDisbursed(): boolean;
}

export declare interface AndroidPayCard {
    /** The date/time the object was created. */
    createdAt?: string;
    /** A string value representing an existing customer in your Vault that owns this payment method. Use this to find the customer. */
    customerId?: string;
    /** A value indicating whether the specified payment method is the default for the customer. */
    default?: boolean;
    /** The first 6 digits of the device-specific account number (DPAN), known as the Bank Identification Number. */
    bin?: string;
    /** The expiration month of the credit card, formatted MM. */
    expirationMonth?: string;
    /** The 2- or 4-digit year associated with the credit card, formatted YY or YYYY. */
    expirationYear?: string;
    /** A unique identifier provided by Google to track the payment method's transactions. */
    googleTransactionId?: string;
    /** A URL that points to a payment method image resource (a PNG file) hosted by Braintree. */
    imageUrl?: string;
    /** The last 4 digits of the payment method tokenized by the network. */
    sourceCardLast4?: string;
    /** The type of the card tokenized by the network. */
    sourceCardType?: string;
    /** Indicates what type of payment method was tokenized by the network. Also includes an identifier for the account (e.g. last 4 digits if the payment method was a credit card). */
    sourceDescription?: string;
    /** An alphanumeric value that references a specific payment method stored in your Vault. Value will be nil if the transaction was not created from a vaulted Android Pay card. */
    token?: string;
    /** The last 4 digits of the device-specific account number (DPAN). */
    virtualCardLast4?: string;
    /** The card type of the device-specific account number (DPAN). */
    virtualCardType?: string;
    /** Alias of virtualCardType */
    cardType?: string;
    /** Alias of virtualCardLast4 */
    last4?: string;
}

export declare interface ApplePayCard {
    /** The type of the credit card. Possible values: */
    cardType?: string;
    /** The date/time the object was created. */
    createdAt?: string;
    /** A string value representing an existing customer in your Vault that owns this payment method. Use this to find the customer. */
    customerId?: string;
    /** A value indicating whether the specified payment method is the default for the customer. */
    default?: boolean;
    /** The expiration month of the card, formatted MM. */
    expirationMonth?: string;
    /** The 4-digit year associated with the card, formatted YYYY. */
    expirationYear?: string;
    /** A value indicating whether the credit card has passed its established expiration date. */
    expired?: boolean;
    /** A URL that points to a payment method image resource (a PNG file) hosted by Braintree. */
    imageUrl?: string;
    /** The last 4 digits of the device-specific account number (DPAN). */
    last4?: string;
    /** A description of the payment method intended for display to the user, typically card type and last 4 digits of the physical card number stored by Wallet (formerly Passbook). Braintree receives this description alongside the DPAN when processing an Apple Pay transaction. */
    paymentInstrumentName?: string;
    /** Indicates what type of payment method was tokenized by the network. Also includes an identifier for the account (e.g. last 4 digits if the payment method was a credit card). */
    sourceDescription?: string;
    /** Subscriptions associated with the payment method. */
    subscriptions?: Subscription[];
    /** An alphanumeric value that references a specific payment method stored in your Vault. */
    token?: string;
    /** The date/time the object was last updated. */
    updatedAt?: string;
}
