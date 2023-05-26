PGDMP     8                    {           Bibkom    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    Bibkom    DATABASE     {   CREATE DATABASE "Bibkom" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';
    DROP DATABASE "Bibkom";
                postgres    false            �            1259    16415    Posts    TABLE     �   CREATE TABLE public."Posts" (
    "Post_id" integer NOT NULL,
    title character varying(70) NOT NULL,
    date date DEFAULT CURRENT_DATE NOT NULL,
    text text NOT NULL,
    image character varying(40)
);
    DROP TABLE public."Posts";
       public         heap    postgres    false            �            1259    16414    Posts_Post_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Posts_Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Posts_Post_id_seq";
       public          postgres    false    215            �           0    0    Posts_Post_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Posts_Post_id_seq" OWNED BY public."Posts"."Post_id";
          public          postgres    false    214            e           2604    16418    Posts Post_id    DEFAULT     t   ALTER TABLE ONLY public."Posts" ALTER COLUMN "Post_id" SET DEFAULT nextval('public."Posts_Post_id_seq"'::regclass);
 @   ALTER TABLE public."Posts" ALTER COLUMN "Post_id" DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16415    Posts 
   TABLE DATA           F   COPY public."Posts" ("Post_id", title, date, text, image) FROM stdin;
    public          postgres    false    215   �
                   0    0    Posts_Post_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Posts_Post_id_seq"', 2, true);
          public          postgres    false    214            h           2606    16423    Posts Posts_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("Post_id");
 >   ALTER TABLE ONLY public."Posts" DROP CONSTRAINT "Posts_pkey";
       public            postgres    false    215            �   B   x�3�4�4202�54 "���NC���t.#ΐʒ�#��q��+d��(��p����qqq )f�     