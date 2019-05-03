/**
 * @name 在DOM中动态添加<script>标签
 */
export function addScriptTag(src: string) {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.src = src
    document.body.appendChild(script)
}
