/*

    Copyright (c) ghgltggamer 2024
    Written by ghgltggamer

*/


function MIST_Controller_Cache(RENDER_PARENT = document.head){
    // creating a cahed element which then will be used by the MIST Controller cache
    var cache_main = document.createElement('mist_controller_cache');
    cache_main.style.display = "none";
    RENDER_PARENT.appendChild(cache_main);

    const main_Class = "mist-controller-cache";

    return {
        add_Html(html){
            // creating a cached html
            var cached_html = document.createElement('mist_controller_cache_child');
            cached_html.classList.add(main_Class);
            cached_html.innerHTML = html;
            cache_main.appendChild(cached_html);
        },

        add_Child(child){
            var cached_html = document.createElement('mist_controller_cache_child');
            cached_html.classList.add(main_Class);
            cached_html.appendChild(child);
            cache_main.appendChild(cached_html);
        },

        remove_Child(index){
            cache_main.getElementsByClassName(main_Class)[index].remove();
        },

        remove_Children(){
            cache_main.innerHTML = "";
        },

        add_Children_As_Html(array_of_html){
            for (var i = 0;array_of_html.length > i;i++){
                var cached_html = document.createElement('mist_controller_cache_child');
                cached_html.classList.add(main_Class);
                cached_html.innerHTML = array_of_html[i];
                cache_main.appendChild(cached_html);
            }
            console.log(array_of_html.length)
        },


        add_Children(array_of_children){
            for (var i = 0;array_of_children.length > i;i++){
                var cached_html = document.createElement('mist_controller_cache_child');
                cached_html.classList.add(main_Class);
                cached_html.appendChild(array_of_children[i]);
                cache_main.appendChild(cached_html);
            }
        },

        
        cpy(element){
            // var inner_Content = element.innerHTML;
            var cached_html = document.createElement('mist_controller_cache_child');
            cached_html.classList.add(main_Class);
            cached_html.innerHTML = element.innerHTML;
            cache_main.appendChild(cached_html);
        },

        cpy_Children(array_of_element){
            for (var i = 0;i < array_of_element.length;i++){
                var cached_html = document.createElement('mist_controller_cache_child');
                cached_html.classList.add(main_Class);
                cached_html.innerHTML = array_of_element[i].innerHTML;
                cache_main.appendChild(cached_html);
            }
        },

        mov(element){
            this.cpy(element);
            element.remove();
        },

        mov_Children(array_of_element){
            this.cpy_Children(array_of_element);
            for (var i = 0;i < array_of_element.length;i++){
                array_of_element[i].remove();
            }
        },

        get_Child(index){
            return cache_main.getElementsByClassName(main_Class)[index];
        },

        get_Children(){
            return cache_main.innerHTML;
        },

        fetch_Child(index){
            return this.get_Child(index).innerHTML;
        },

        fetch_Children(){
            var dat = document.getElementsByClassName(main_Class);
            var children_data = "";
            for (var i = 0;i < dat.length;i++){
                children_data += dat[i].innerHTML;
            }

            return children_data;
        }
    }// MIST_Controller_Cache/return
}