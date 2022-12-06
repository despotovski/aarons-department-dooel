<?php

if (!function_exists('image_base64_convert')) {
    /**
     * Convert image to base64
     *
     * @param $path
     * @return string
     */
    function image_base64_convert($path): string
    {
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);

        return 'data:image/' . $type . ';base64,' . base64_encode($data);
    }
}

if (!function_exists('array_null_string_to_null_convert')) {
    /**
     * Convert array null string to null
     *
     * @param $array
     * @return array
     */
    function array_null_string_to_null_convert($array): array
    {
        foreach ($array as &$item) {
            if ($item === 'null') {
                $item = null;
            }
        }
        return $array;
    }
}

if (!function_exists('apply_style')) {
    /**
     * @param $text
     * @param $element
     * @param $class
     * @return string
     */
    function apply_style($text, $element, $class)
    {
        return "<{$element} class='{$class}'>$text</{$element}>";
    }
}

if (!function_exists('relativeRoute')) {

    /**
     * @param $name
     * @param array $parameters
     * @return mixed
     */
    function relativeRoute($name, $parameters = [])
    {
        return route($name, $parameters, false);
    }
}

if (!function_exists('intendenUrl')) {

    /**
     * @return string
     */
    function intendenUrl($default = '/')
    {
        $intended = Illuminate\Support\Facades\Redirect::intended($default);
        $intendedUrl = $intended->getTargetUrl();

        if (env('APP_SSL_ENABLED', false)) {
            $intendedUrl = str_replace('http:', 'https:', $intendedUrl);
        }

        return $intendedUrl;
    }
}

if (!function_exists('file_get_contents_curl')) {
    function file_get_contents_curl($url)
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_AUTOREFERER, true);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

        $data = curl_exec($ch);
        curl_close($ch);

        return $data;
    }
}
