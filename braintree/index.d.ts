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

declare class BraintreeGateway {
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

export declare interface ResponseCallback<T> {
    (err: any, response: ({ success: boolean } & T) | ErrorResponse): void;
}
declare class ErrorResponse {
    success: false;
    errors: ValidationErrorsCollection;
    transaction?: Transaction;
}
declare class ValidationError {
    attribute: string;
    code: string;
    message: string;
}
declare class ValidationErrorsCollection {
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