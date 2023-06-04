PGDMP                         {           Bibkom    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    Bibkom    DATABASE     {   CREATE DATABASE "Bibkom" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';
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
       public          postgres    false    215            	           0    0    Posts_Post_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Posts_Post_id_seq" OWNED BY public."Posts"."Post_id";
          public          postgres    false    214            �            1259    16425 	   Questions    TABLE     �   CREATE TABLE public."Questions" (
    "Question_id" integer NOT NULL,
    "Email" character varying(50) NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Topic" character varying(50) NOT NULL,
    text text NOT NULL
);
    DROP TABLE public."Questions";
       public         heap    postgres    false            �            1259    16424    Questions_Question_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Questions_Question_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."Questions_Question_id_seq";
       public          postgres    false    217            
           0    0    Questions_Question_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."Questions_Question_id_seq" OWNED BY public."Questions"."Question_id";
          public          postgres    false    216            j           2604    16418    Posts Post_id    DEFAULT     t   ALTER TABLE ONLY public."Posts" ALTER COLUMN "Post_id" SET DEFAULT nextval('public."Posts_Post_id_seq"'::regclass);
 @   ALTER TABLE public."Posts" ALTER COLUMN "Post_id" DROP DEFAULT;
       public          postgres    false    214    215    215            l           2604    16428    Questions Question_id    DEFAULT     �   ALTER TABLE ONLY public."Questions" ALTER COLUMN "Question_id" SET DEFAULT nextval('public."Questions_Question_id_seq"'::regclass);
 H   ALTER TABLE public."Questions" ALTER COLUMN "Question_id" DROP DEFAULT;
       public          postgres    false    217    216    217                       0    16415    Posts 
   TABLE DATA           F   COPY public."Posts" ("Post_id", title, date, text, image) FROM stdin;
    public          postgres    false    215   n                 0    16425 	   Questions 
   TABLE DATA           T   COPY public."Questions" ("Question_id", "Email", "Name", "Topic", text) FROM stdin;
    public          postgres    false    217   �                  0    0    Posts_Post_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Posts_Post_id_seq"', 41, true);
          public          postgres    false    214                       0    0    Questions_Question_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."Questions_Question_id_seq"', 14, true);
          public          postgres    false    216            n           2606    16423    Posts Posts_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("Post_id");
 >   ALTER TABLE ONLY public."Posts" DROP CONSTRAINT "Posts_pkey";
       public            postgres    false    215            p           2606    16432    Questions Questions_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."Questions"
    ADD CONSTRAINT "Questions_pkey" PRIMARY KEY ("Question_id");
 F   ALTER TABLE ONLY public."Questions" DROP CONSTRAINT "Questions_pkey";
       public            postgres    false    217                1  x�mT�n7>�O1���]�'�)���!i�h��9��?�?�rO�Q�Г��Э�M��dȵ7- A�3����M�k��y�g��3�|��B-
6ܲF�k�x%�Z*�V����;�JFU����0;��Q���gp!�3.C��k�U*[�Kx��N��h:� _,�b���Cg�t���%���_�4�b���`��x0m�Jwzx��	R94
��h�z�Y�����=�m��ǡ8^��g��?|T�Z�B+�xxD�~~-!��j����_�\P-��֯A0��3-��$�b@��*��X���=� ���F�k�'�����7>j�P�@Ŭ��F֒I}���s�l7HjgP(��N�eYlG�jw̋���}q�,N��{C�Jp�>#TL��>j�W��O�C�����]y�~e+H}j�a��0?��Vd�v�*^���4���W���J�����Ϳj0�)A������E44*8��s�����֦�/�c*�?�%�Y�-gW�J��;Vvrw_�>�~MT(�B'稌��gJ�n��aE!��⤤C8g��:�)�3�I<�:E�D�B�SVG�K�.P�����=��J��IT�S��Q���*K�ȉQ+��Ҫ�e�|�]{+�[��d��M2�2��'���v��}:�6�X�Od��5���\���a�LԲ�>�:M�h
�B�R����ɤ铖$
M~|@�ݐ�)����Z�B5�R��s�)���t���$C�o;m7\F��s���-kc\E+m�X��K
Qd�G�<_ξy�]�� ���z            x�34�tL��I�$N�+F��� �#8     