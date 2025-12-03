
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/iframe";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/iframe": Record<string, never>
		};
		Pathname(): "/" | "/iframe" | "/iframe/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/audio/psn-audio-button.mp3" | "/audio/psn-audio-page-flip.mp3" | "/audio/psn-audio-swoosh.mp3" | "/favicon.png" | "/images/aguan.png" | "/images/agus-harimurti-yudhoyono.png" | "/images/airlangga-hartanto.png" | "/images/boy-thohir.png" | "/images/haji-isam.png" | "/images/injourney.png" | "/images/joko-widodo-1.png" | "/images/joko-widodo-2.png" | "/images/joko-widodo-3.png" | "/images/joko-widodo-4.png" | "/images/lim-hariyanto.png" | "/images/listyo-sigit-prabowo.png" | "/images/luhut-binsar-panjaitan-1.png" | "/images/luhut-binsar-panjaitan-2.png" | "/images/luhut-binsar-panjaitan-3.png" | "/images/martias-fangiono.png" | "/images/pertamina.png" | "/images/petani-01.svg" | "/images/petani-02.svg" | "/images/petani-03.svg" | "/images/petani-04.svg" | "/images/petani-05.svg" | "/images/petani-06.svg" | "/images/pln.png" | "/images/prabowo-subianto.png" | "/images/siti-nurbaya-bakar.png" | "/images/sri-mulyani-indrawati.png" | "/images/tomy-winata.png" | string & {};
	}
}