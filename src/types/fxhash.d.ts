declare let fxhash: string;
declare let fxrand: () => number;
declare let fxpreview: () => void;
declare let isFxpreview: boolean;

interface Window {
    $fxhashFeatures?: any;
}
